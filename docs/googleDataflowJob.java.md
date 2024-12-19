# `googleDataflowJob` Submodule <a name="`googleDataflowJob` Submodule" id="@cdktf/provider-google-beta.googleDataflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowJob <a name="GoogleDataflowJob" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job google_dataflow_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJob;

GoogleDataflowJob.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .tempGcsLocation(java.lang.String)
    .templateGcsPath(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .enableStreamingEngine(java.lang.Boolean)
//  .enableStreamingEngine(IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean)
//  .skipWaitOnJobTermination(IResolvable)
//  .subnetwork(java.lang.String)
//  .timeouts(GoogleDataflowJobTimeouts)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.tempGcsLocation">tempGcsLocation</a></code> | <code>java.lang.String</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.templateGcsPath">templateGcsPath</a></code> | <code>java.lang.String</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.onDelete">onDelete</a></code> | <code>java.lang.String</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#name GoogleDataflowJob#name}

---

##### `tempGcsLocation`<sup>Required</sup> <a name="tempGcsLocation" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.tempGcsLocation"></a>

- *Type:* java.lang.String

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#temp_gcs_location GoogleDataflowJob#temp_gcs_location}

---

##### `templateGcsPath`<sup>Required</sup> <a name="templateGcsPath" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.templateGcsPath"></a>

- *Type:* java.lang.String

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#template_gcs_path GoogleDataflowJob#template_gcs_path}

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.additionalExperiments"></a>

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#additional_experiments GoogleDataflowJob#additional_experiments}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.enableStreamingEngine"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#enable_streaming_engine GoogleDataflowJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.ipConfiguration"></a>

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#ip_configuration GoogleDataflowJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#kms_key_name GoogleDataflowJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#labels GoogleDataflowJob#labels}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#machine_type GoogleDataflowJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.maxWorkers"></a>

- *Type:* java.lang.Number

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#max_workers GoogleDataflowJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#network GoogleDataflowJob#network}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.onDelete"></a>

- *Type:* java.lang.String

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#on_delete GoogleDataflowJob#on_delete}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#parameters GoogleDataflowJob#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#project GoogleDataflowJob#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#region GoogleDataflowJob#region}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#service_account_email GoogleDataflowJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.skipWaitOnJobTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#skip_wait_on_job_termination GoogleDataflowJob#skip_wait_on_job_termination}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#subnetwork GoogleDataflowJob#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#timeouts GoogleDataflowJob#timeouts}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.transformNameMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#transform_name_mapping GoogleDataflowJob#transform_name_mapping}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#zone GoogleDataflowJob#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination">resetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataflowJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments"></a>

```java
public void resetAdditionalExperiments()
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine"></a>

```java
public void resetEnableStreamingEngine()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId"></a>

```java
public void resetId()
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration"></a>

```java
public void resetIpConfiguration()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete"></a>

```java
public void resetOnDelete()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetSkipWaitOnJobTermination` <a name="resetSkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination"></a>

```java
public void resetSkipWaitOnJobTermination()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping"></a>

```java
public void resetTransformNameMapping()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataflowJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJob;

GoogleDataflowJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJob;

GoogleDataflowJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJob;

GoogleDataflowJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJob;

GoogleDataflowJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataflowJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataflowJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataflowJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataflowJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataflowJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput">onDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput">skipWaitOnJobTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput">tempGcsLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput">templateGcsPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation">tempGcsLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath">templateGcsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts"></a>

```java
public GoogleDataflowJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperimentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput"></a>

```java
public java.lang.Object getEnableStreamingEngineInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput"></a>

```java
public java.lang.String getIpConfigurationInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput"></a>

```java
public java.lang.String getOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="skipWaitOnJobTerminationInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput"></a>

```java
public java.lang.Object getSkipWaitOnJobTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tempGcsLocationInput`<sup>Optional</sup> <a name="tempGcsLocationInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput"></a>

```java
public java.lang.String getTempGcsLocationInput();
```

- *Type:* java.lang.String

---

##### `templateGcsPathInput`<sup>Optional</sup> <a name="templateGcsPathInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput"></a>

```java
public java.lang.String getTemplateGcsPathInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine"></a>

```java
public java.lang.Object getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `skipWaitOnJobTermination`<sup>Required</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Object getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tempGcsLocation`<sup>Required</sup> <a name="tempGcsLocation" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation"></a>

```java
public java.lang.String getTempGcsLocation();
```

- *Type:* java.lang.String

---

##### `templateGcsPath`<sup>Required</sup> <a name="templateGcsPath" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath"></a>

```java
public java.lang.String getTemplateGcsPath();
```

- *Type:* java.lang.String

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowJobConfig <a name="GoogleDataflowJobConfig" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJobConfig;

GoogleDataflowJobConfig.builder()
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
    .name(java.lang.String)
    .tempGcsLocation(java.lang.String)
    .templateGcsPath(java.lang.String)
//  .additionalExperiments(java.util.List<java.lang.String>)
//  .enableStreamingEngine(java.lang.Boolean)
//  .enableStreamingEngine(IResolvable)
//  .id(java.lang.String)
//  .ipConfiguration(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineType(java.lang.String)
//  .maxWorkers(java.lang.Number)
//  .network(java.lang.String)
//  .onDelete(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .skipWaitOnJobTermination(java.lang.Boolean)
//  .skipWaitOnJobTermination(IResolvable)
//  .subnetwork(java.lang.String)
//  .timeouts(GoogleDataflowJobTimeouts)
//  .transformNameMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation">tempGcsLocation</a></code> | <code>java.lang.String</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath">templateGcsPath</a></code> | <code>java.lang.String</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments">additionalExperiments</a></code> | <code>java.util.List<java.lang.String></code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>java.lang.String</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to use for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping">transformNameMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#name GoogleDataflowJob#name}

---

##### `tempGcsLocation`<sup>Required</sup> <a name="tempGcsLocation" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation"></a>

```java
public java.lang.String getTempGcsLocation();
```

- *Type:* java.lang.String

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#temp_gcs_location GoogleDataflowJob#temp_gcs_location}

---

##### `templateGcsPath`<sup>Required</sup> <a name="templateGcsPath" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath"></a>

```java
public java.lang.String getTemplateGcsPath();
```

- *Type:* java.lang.String

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#template_gcs_path GoogleDataflowJob#template_gcs_path}

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments"></a>

```java
public java.util.List<java.lang.String> getAdditionalExperiments();
```

- *Type:* java.util.List<java.lang.String>

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#additional_experiments GoogleDataflowJob#additional_experiments}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine"></a>

```java
public java.lang.Object getEnableStreamingEngine();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#enable_streaming_engine GoogleDataflowJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration"></a>

```java
public java.lang.String getIpConfiguration();
```

- *Type:* java.lang.String

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#ip_configuration GoogleDataflowJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#kms_key_name GoogleDataflowJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#labels GoogleDataflowJob#labels}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#machine_type GoogleDataflowJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#max_workers GoogleDataflowJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#network GoogleDataflowJob#network}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#on_delete GoogleDataflowJob#on_delete}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#parameters GoogleDataflowJob#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#project GoogleDataflowJob#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#region GoogleDataflowJob#region}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#service_account_email GoogleDataflowJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination"></a>

```java
public java.lang.Object getSkipWaitOnJobTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#skip_wait_on_job_termination GoogleDataflowJob#skip_wait_on_job_termination}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#subnetwork GoogleDataflowJob#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts"></a>

```java
public GoogleDataflowJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#timeouts GoogleDataflowJob#timeouts}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTransformNameMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#transform_name_mapping GoogleDataflowJob#transform_name_mapping}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#zone GoogleDataflowJob#zone}

---

### GoogleDataflowJobTimeouts <a name="GoogleDataflowJobTimeouts" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJobTimeouts;

GoogleDataflowJobTimeouts.builder()
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowJobTimeoutsOutputReference <a name="GoogleDataflowJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataflow_job.GoogleDataflowJobTimeoutsOutputReference;

new GoogleDataflowJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---



