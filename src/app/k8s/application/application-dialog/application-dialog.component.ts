import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DeploymentsService} from '../../deployments/deployments.service';
import {ServiceService} from '../../services/service.service';
import {IngressesService} from '../../ingresses/ingresses.service';
import {Container, Port, Env, Rule, Path} from '../application';
import {
  AppsV1beta1Deployment,
  AppsV1beta1DeploymentSpec, V1beta1HTTPIngressPath, V1beta1HTTPIngressRuleValue,
  V1beta1Ingress,
  V1beta1IngressBackend, V1beta1IngressRule, V1beta1IngressSpec, V1Container, V1ContainerPort, V1LabelSelector,
  V1ObjectMeta, V1PodSpec,
  V1PodTemplateSpec,
  V1Service, V1ServicePort, V1ServiceSpec
} from '../../api';
import {ApplicationYamlComponent} from '../application-yaml/application-yaml.component';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.scss'],
  providers: [DeploymentsService, ServiceService, IngressesService]
})
export class ApplicationDialogComponent implements OnInit {
  serviceTypes = ['ClusterIP', 'NodePort', 'LoadBalancer'];
  appForm: FormGroup;
  containerForm: FormGroup;
  envForm: FormGroup;
  serviceForm: FormGroup;
  ingressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deploy: DeploymentsService,
    private router: Router,
    private service: ServiceService,
    private ingress: IngressesService,
    public dialog: MatDialog
  ) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.appForm = this.fb.group({
      name: ['', Validators.required],
      namespace: ['', Validators.required],
      replicas: '',
      labels: this.fb.group({
        key: ['', Validators.required],
        value: ['', Validators.required]
      })
    });
    this.containerForm = this.fb.group({
      containers: this.fb.array([this.fb.group(new Container())]),
    });
    this.envForm = this.fb.group({
      env: this.fb.array([this.fb.group(new Env())])
    });
    this.serviceForm = this.fb.group({
      type: '',
      ports: this.fb.array([this.fb.group(new Port())])
    });
    this.ingressForm = this.fb.group({
      host: '',
      http: this.fb.array([this.fb.group(new Path())
      ])
    });
  }
  get containers(): FormArray {
    return this.containerForm.get('containers') as FormArray;
  }

  addContainer() {
    this.containers.push(this.fb.group(new Container()));
  }

  get env(): FormArray {
    return this.envForm.get('env') as FormArray;
  }

  addEnv() {
    this.env.push(this.fb.group(new Env()));
  }

  get ports(): FormArray {
    return this.serviceForm.get('ports') as FormArray;
  }

  addPort() {
    return this.ports.push(this.fb.group(new Port()));
  }

  get http(): FormArray {
    return this.ingressForm.get('http') as FormArray;
  }
  addhttp() {
    return this.http.push(this.fb.group(new Path()));
  }
  prepareDeployment(): AppsV1beta1Deployment {
    const appModel = this.appForm.value;
    const containerModel = this.containerForm.value;
    const serviceModel = this.serviceForm.value;
    const metadata: V1ObjectMeta = new V1ObjectMeta();
    metadata.name = appModel.name;
    metadata.namespace = appModel.namespace;
    metadata.labels = this.generateLabels(appModel.labels);
    const deployment: AppsV1beta1Deployment = new AppsV1beta1Deployment();
    deployment.metadata = metadata;
    deployment.spec = this.generateDeploymentSpec();
    return deployment;
  }

  generateDeploymentSpec() {
    const appModel = this.appForm.value;
    const deploymentSpec = new AppsV1beta1DeploymentSpec();
    deploymentSpec.replicas = appModel.replicas;
    deploymentSpec.selector = this.generateLabelSelector(appModel);
    deploymentSpec.template = this.generateTemplate();
    return deploymentSpec;
  }

  generateTemplate() {
    const appModel = this.appForm.value;
    const metedata = new V1ObjectMeta();
    metedata.labels = this.generateLabels(appModel.labels);
    const templateSpec = new V1PodTemplateSpec();
    templateSpec.spec = this.generatePodSpec();
    templateSpec.metadata = metedata;
    return templateSpec;
  }

  generatePodSpec() {
    const containerModel = this.containerForm.value;
    const podSpec = new V1PodSpec();
    podSpec.containers = this.generateContainer(containerModel.containers);
    return podSpec;
  }

  generateLabelSelector(appModel) {
    const lebelSelector = new V1LabelSelector();
    lebelSelector.matchLabels = this.generateLabels(appModel.labels);
    return lebelSelector;
  }

  generateLabels(modelLabel: {}) {
    const key = modelLabel['key'];
    const value = modelLabel['value'];
    const labels: { [key: string]: string } = {};
    labels[key] = value;
    return labels;
  }

  generateEnv(modelEnv: Env[]) {
    const envs = [];
    for (const en of modelEnv) {
      const name = en.name;
      const value = en.value;
      envs.push({name: value});
    }
    return envs;
  }

  generateContainerPort(modelPort: Port[]) {
    const ports: V1ContainerPort[] = [];
    const port = new V1ContainerPort();
    for (const P of modelPort) {
      port.containerPort = P.targetPort;
      port.protocol = P.protocol;
      port.name = P.name;
      ports.push(port);
    }
    return ports;
  }

  generateContainer(modelContainer: Container[]) {
    const envModel = this.envForm.value;
    const serviceModel = this.serviceForm.value;
    const containers: V1Container[] = [];
    for (const C of modelContainer) {
      const container = new V1Container();
      if (C.args !== '') {
        container.args = C.args.split(' ');
      }
      if (C.command !== '') {
        container.command = C.command.split(' ');
      }
      container.name = C.name;
      container.image = C.image;
      container.env = this.generateEnv(envModel.env);
      container.ports = this.generateContainerPort(serviceModel.ports);
      containers.push(container);
    }
    return containers;
  }

  prepareService(): V1Service {
    const appModel = this.appForm.value;
    const serviceModel = this.serviceForm.value;
    const service: V1Service = new V1Service();
    const metadata: V1ObjectMeta = new V1ObjectMeta();
    metadata.name = appModel.name;
    metadata.namespace = appModel.namespace;
    metadata.labels = this.generateLabels(appModel.labels);
    service.metadata = metadata;
    service.spec = this.generateServiceSpec(appModel);

    return service;
  }
  generateServiceSpec(appModel): V1ServiceSpec {
    const serviceModel = this.serviceForm.value;
    const serviceSpec: V1ServiceSpec = new V1ServiceSpec();
    serviceSpec.type = serviceModel.type;
    serviceSpec.ports = this.generateServicePorts(serviceModel);
    serviceSpec.selector = this.generateLabels(appModel.labels);
    return serviceSpec;
  }
  generateServicePorts(service): V1ServicePort[] {
    const ports: V1ServicePort[] = [];
    const port = new V1ServicePort();
    for (const _port of service.ports) {
      port.name = _port.name;
      port.port = _port.port;
      port.protocol = _port.protocol;
      port.targetPort = _port.targetPort;
      ports.push(port);
    }
    return ports;
  }
  prepareIngress() {
    const ingressModel = this.ingressForm.value;
    const appModel = this.appForm.value;
    const serviceModel = this.serviceForm.value;
    const ingress: V1beta1Ingress = new V1beta1Ingress();
    const metadata: V1ObjectMeta = new V1ObjectMeta();
    const spec: V1beta1IngressSpec = new V1beta1IngressSpec();
    metadata.name = appModel.name;
    metadata.namespace = appModel.namespace;
    ingress.metadata = metadata;
    spec.rules = this.generateRules(ingressModel);
    ingress.spec = spec;
    return ingress;
  }
  generateRules(ingressModel): V1beta1IngressRule[] {
    const rules: V1beta1IngressRule[] = [];
    const rule = new  V1beta1IngressRule();
    rule.host = ingressModel.host;
    const http = new V1beta1HTTPIngressRuleValue();
    http.paths = this.generatePath(ingressModel.http);
    rule.http = http;
    rules.push(rule);
    console.log('生成rules', rules);
    return rules;
  }
  generatePath(ruleModel) {
    console.log('generatepath', ruleModel);
    const paths: V1beta1HTTPIngressPath[] = [];
    for (const model of ruleModel) {
      const path = new V1beta1HTTPIngressPath();
      const backend = new V1beta1IngressBackend();
      path.path = model.path;
      backend.servicePort = model.servicePort;
      backend.serviceName = model.serviceName;
      path.backend = backend;
      paths.push(path);
    }
    console.log('生成paths', paths);
    return paths;
  }

  submit() {
    const deployment: AppsV1beta1Deployment = this.prepareDeployment();
    const service: V1Service = this.prepareService();
    const ingress: V1beta1Ingress = this.prepareIngress();
    const namespace = deployment.metadata.namespace;
    console.log('生成服务', service);
    console.log('生成部署', deployment);
    console.log('生成入口', ingress);
    this.service.createService(namespace, service)
      .subscribe(data => {
        console.log('返回服务', data);
      });
    this.deploy.createDeployment(namespace, deployment)
      .subscribe(data => {
        console.log('返回', data);
        this.router.navigate(['/k8s']);
      });
    this.ingress.createIngress(ingress)
      .subscribe(resp => {
        console.log('创建入口', resp);
      });
  }
  openYamlDialog() {
    const dialogRef = this.dialog.open(ApplicationYamlComponent, {
      height: '900px',
      width: '1400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`会话框状态：${result}`);
    });
  }
}
