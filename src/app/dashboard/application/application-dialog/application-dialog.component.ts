import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {Container, Port, Env} from '../application';
// import {Deployment, Strategy} from '../../deployment/deployment';
import {
  AppsV1beta1Deployment,
  AppsV1beta1DeploymentSpec, V1Container, V1ContainerPort, V1EnvVar, V1LabelSelector,
  V1ObjectMeta,
  V1PodSpec,
  V1PodTemplateSpec,
  V1ListMeta,
  V1Status,
  V1Service, V1ServiceSpec, V1ServicePort
} from '../../api';
import {ApplicationService} from '../application.service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.scss'],
  providers: [ApplicationService, ServiceService]
})
export class ApplicationDialogComponent implements OnInit, OnChanges {
  serviceTypes = ['ClusterIP', 'NodePort', 'LoadBalancer'];
  appForm: FormGroup;
  containerForm: FormGroup;
  envForm: FormGroup;
  serviceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private app: ApplicationService,
    private router: Router,
    private service: ServiceService) {
    this.createForm();
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
      containers: this.fb.array([]),
    });
    this.envForm = this.fb.group({
      env: this.fb.array([])
    });
    this.serviceForm = this.fb.group({
      type: '',
      ports: this.fb.array([])
    });
  }

  // setContainer(containers: V1Container[]) {
  //   const constainerFGs = containers.map(container => this.fb.group(container));
  //   const containerFormArray = this.fb.array(containers);
  //   this.containerForm.setControl('containers', containerFormArray);
  // }
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

  submit() {
    const deployment: AppsV1beta1Deployment = this.prepareDeployment();
    const service: V1Service = this.prepareService();
    console.log('生成服务', service);
    console.log('生成', deployment);
    this.service.createService('default', service)
      .subscribe(data => {
        console.log('返回服务', data);
      });
    this.app.addDeployment(deployment)
      .subscribe(data => {
        console.log('返回', data);
        this.router.navigate(['/dashboard']);
      });
  }


  ngOnChanges() {
  }

  ngOnInit() {
  }
}
