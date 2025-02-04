# `googleDataflowFlexTemplateJob` Submodule <a name="`googleDataflowFlexTemplateJob` Submodule" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowFlexTemplateJob <a name="GoogleDataflowFlexTemplateJob" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJob;

GoogleDataflowFlexTemplateJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .containerSpecGcsPath(java.lang.String)
    .name(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .autoscalingAlgorithm(java.lang.String)
//  .enableStreamingEngine(java.lang.Boolean)
//  .enableStreamingEngine(IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launcherMachineType(java.lang.String)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sdkContainerImage(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean)
//  .skipWaitOnJobTermination(IResolvable)
//  .stagingLocation(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tempLocation(java.lang.String)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.onDelete">onDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.containerSpecGcsPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}.

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.additionalExperiments"></a>

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#additional_experiments GoogleDataflowFlexTemplateJob#additional_experiments}

---

##### `autoscalingAlgorithm`<sup>Optional</sup> <a name="autoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.autoscalingAlgorithm"></a>

- *Type:* java.lang.String

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#autoscaling_algorithm GoogleDataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.enableStreamingEngine"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#enable_streaming_engine GoogleDataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.ipConfiguration"></a>

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#ip_configuration GoogleDataflowFlexTemplateJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#kms_key_name GoogleDataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}

---

##### `launcherMachineType`<sup>Optional</sup> <a name="launcherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.launcherMachineType"></a>

- *Type:* java.lang.String

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#launcher_machine_type GoogleDataflowFlexTemplateJob#launcher_machine_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#machine_type GoogleDataflowFlexTemplateJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.maxWorkers"></a>

- *Type:* java.lang.Number

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#max_workers GoogleDataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#network GoogleDataflowFlexTemplateJob#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.numWorkers"></a>

- *Type:* java.lang.Number

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#num_workers GoogleDataflowFlexTemplateJob#num_workers}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.onDelete"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}

---

##### `sdkContainerImage`<sup>Optional</sup> <a name="sdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.sdkContainerImage"></a>

- *Type:* java.lang.String

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#sdk_container_image GoogleDataflowFlexTemplateJob#sdk_container_image}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#service_account_email GoogleDataflowFlexTemplateJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.skipWaitOnJobTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `stagingLocation`<sup>Optional</sup> <a name="stagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.stagingLocation"></a>

- *Type:* java.lang.String

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#staging_location GoogleDataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#subnetwork GoogleDataflowFlexTemplateJob#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.tempLocation"></a>

- *Type:* java.lang.String

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#temp_location GoogleDataflowFlexTemplateJob#temp_location}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.transformNameMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#transform_name_mapping GoogleDataflowFlexTemplateJob#transform_name_mapping}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAutoscalingAlgorithm">resetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLauncherMachineType">resetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSdkContainerImage">resetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination">resetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetStagingLocation">resetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```java
public void resetAdditionalExperiments()
```

##### `resetAutoscalingAlgorithm` <a name="resetAutoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```java
public void resetAutoscalingAlgorithm()
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```java
public void resetEnableStreamingEngine()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId"></a>

```java
public void resetId()
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetIpConfiguration"></a>

```java
public void resetIpConfiguration()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLauncherMachineType` <a name="resetLauncherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLauncherMachineType"></a>

```java
public void resetLauncherMachineType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetNumWorkers"></a>

```java
public void resetNumWorkers()
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete"></a>

```java
public void resetOnDelete()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSdkContainerImage` <a name="resetSdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSdkContainerImage"></a>

```java
public void resetSdkContainerImage()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetSkipWaitOnJobTermination` <a name="resetSkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```java
public void resetSkipWaitOnJobTermination()
```

##### `resetStagingLocation` <a name="resetStagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetStagingLocation"></a>

```java
public void resetStagingLocation()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTempLocation"></a>

```java
public void resetTempLocation()
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetTransformNameMapping"></a>

```java
public void resetTransformNameMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataflowFlexTemplateJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJob;

GoogleDataflowFlexTemplateJob.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJob;

GoogleDataflowFlexTemplateJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJob;

GoogleDataflowFlexTemplateJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJob;

GoogleDataflowFlexTemplateJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataflowFlexTemplateJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataflowFlexTemplateJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataflowFlexTemplateJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithmInput">autoscalingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput">containerSpecGcsPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineTypeInput">launcherMachineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkersInput">numWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput">onDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImageInput">sdkContainerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">skipWaitOnJobTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocationInput">stagingLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocationInput">tempLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperimentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingAlgorithmInput`<sup>Optional</sup> <a name="autoscalingAlgorithmInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```java
public java.lang.String getAutoscalingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `containerSpecGcsPathInput`<sup>Optional</sup> <a name="containerSpecGcsPathInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```java
public java.lang.String getContainerSpecGcsPathInput();
```

- *Type:* java.lang.String

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```java
public java.lang.Object getEnableStreamingEngineInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```java
public java.lang.String getIpConfigurationInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launcherMachineTypeInput`<sup>Optional</sup> <a name="launcherMachineTypeInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```java
public java.lang.String getLauncherMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkersInput"></a>

```java
public java.lang.Number getNumWorkersInput();
```

- *Type:* java.lang.Number

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput"></a>

```java
public java.lang.String getOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sdkContainerImageInput`<sup>Optional</sup> <a name="sdkContainerImageInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```java
public java.lang.String getSdkContainerImageInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="skipWaitOnJobTerminationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```java
public java.lang.Object getSkipWaitOnJobTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stagingLocationInput`<sup>Optional</sup> <a name="stagingLocationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocationInput"></a>

```java
public java.lang.String getStagingLocationInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocationInput"></a>

```java
public java.lang.String getTempLocationInput();
```

- *Type:* java.lang.String

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingAlgorithm`<sup>Required</sup> <a name="autoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```java
public java.lang.String getAutoscalingAlgorithm();
```

- *Type:* java.lang.String

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```java
public java.lang.String getContainerSpecGcsPath();
```

- *Type:* java.lang.String

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```java
public java.lang.Object getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launcherMachineType`<sup>Required</sup> <a name="launcherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.launcherMachineType"></a>

```java
public java.lang.String getLauncherMachineType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sdkContainerImage`<sup>Required</sup> <a name="sdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.sdkContainerImage"></a>

```java
public java.lang.String getSdkContainerImage();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTermination`<sup>Required</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Object getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stagingLocation`<sup>Required</sup> <a name="stagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.stagingLocation"></a>

```java
public java.lang.String getStagingLocation();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tempLocation"></a>

```java
public java.lang.String getTempLocation();
```

- *Type:* java.lang.String

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowFlexTemplateJobConfig <a name="GoogleDataflowFlexTemplateJobConfig" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_flex_template_job.GoogleDataflowFlexTemplateJobConfig;

GoogleDataflowFlexTemplateJobConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .containerSpecGcsPath(java.lang.String)
    .name(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .autoscalingAlgorithm(java.lang.String)
//  .enableStreamingEngine(java.lang.Boolean)
//  .enableStreamingEngine(IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launcherMachineType(java.lang.String)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sdkContainerImage(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean)
//  .skipWaitOnJobTermination(IResolvable)
//  .stagingLocation(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tempLocation(java.lang.String)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.launcherMachineType">launcherMachineType</a></code> | <code>java.lang.String</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.sdkContainerImage">sdkContainerImage</a></code> | <code>java.lang.String</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.stagingLocation">stagingLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.tempLocation">tempLocation</a></code> | <code>java.lang.String</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```java
public java.lang.String getContainerSpecGcsPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}.

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#additional_experiments GoogleDataflowFlexTemplateJob#additional_experiments}

---

##### `autoscalingAlgorithm`<sup>Optional</sup> <a name="autoscalingAlgorithm" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```java
public java.lang.String getAutoscalingAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#autoscaling_algorithm GoogleDataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```java
public java.lang.Object getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#enable_streaming_engine GoogleDataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#ip_configuration GoogleDataflowFlexTemplateJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#kms_key_name GoogleDataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}

---

##### `launcherMachineType`<sup>Optional</sup> <a name="launcherMachineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```java
public java.lang.String getLauncherMachineType();
```

- *Type:* java.lang.String

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#launcher_machine_type GoogleDataflowFlexTemplateJob#launcher_machine_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#machine_type GoogleDataflowFlexTemplateJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#max_workers GoogleDataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#network GoogleDataflowFlexTemplateJob#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#num_workers GoogleDataflowFlexTemplateJob#num_workers}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}

---

##### `sdkContainerImage`<sup>Optional</sup> <a name="sdkContainerImage" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```java
public java.lang.String getSdkContainerImage();
```

- *Type:* java.lang.String

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#sdk_container_image GoogleDataflowFlexTemplateJob#sdk_container_image}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#service_account_email GoogleDataflowFlexTemplateJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Object getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `stagingLocation`<sup>Optional</sup> <a name="stagingLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```java
public java.lang.String getStagingLocation();
```

- *Type:* java.lang.String

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#staging_location GoogleDataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#subnetwork GoogleDataflowFlexTemplateJob#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.tempLocation"></a>

```java
public java.lang.String getTempLocation();
```

- *Type:* java.lang.String

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#temp_location GoogleDataflowFlexTemplateJob#temp_location}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataflow_flex_template_job#transform_name_mapping GoogleDataflowFlexTemplateJob#transform_name_mapping}

---



