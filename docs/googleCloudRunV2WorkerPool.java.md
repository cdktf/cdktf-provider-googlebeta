# `googleCloudRunV2WorkerPool` Submodule <a name="`googleCloudRunV2WorkerPool` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2WorkerPool <a name="GoogleCloudRunV2WorkerPool" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPool;

GoogleCloudRunV2WorkerPool.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .template(GoogleCloudRunV2WorkerPoolTemplate)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .binaryAuthorization(GoogleCloudRunV2WorkerPoolBinaryAuthorization)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .customAudiences(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceSplits(IResolvable)
//  .instanceSplits(java.util.List<GoogleCloudRunV2WorkerPoolInstanceSplits>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .project(java.lang.String)
//  .scaling(GoogleCloudRunV2WorkerPoolScaling)
//  .timeouts(GoogleCloudRunV2WorkerPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.customAudiences">customAudiences</a></code> | <code>java.util.List<java.lang.String></code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.instanceSplits">instanceSplits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>></code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#location GoogleCloudRunV2WorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#template GoogleCloudRunV2WorkerPool#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#annotations GoogleCloudRunV2WorkerPool#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#binary_authorization GoogleCloudRunV2WorkerPool#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.client"></a>

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#client GoogleCloudRunV2WorkerPool#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.clientVersion"></a>

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#client_version GoogleCloudRunV2WorkerPool#client_version}

---

##### `customAudiences`<sup>Optional</sup> <a name="customAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.customAudiences"></a>

- *Type:* java.util.List<java.lang.String>

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#custom_audiences GoogleCloudRunV2WorkerPool#custom_audiences}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#deletion_protection GoogleCloudRunV2WorkerPool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#description GoogleCloudRunV2WorkerPool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceSplits`<sup>Optional</sup> <a name="instanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.instanceSplits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>>

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#instance_splits GoogleCloudRunV2WorkerPool#instance_splits}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#labels GoogleCloudRunV2WorkerPool#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.launchStage"></a>

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#launch_stage GoogleCloudRunV2WorkerPool#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}.

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.scaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#scaling GoogleCloudRunV2WorkerPool#scaling}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#timeouts GoogleCloudRunV2WorkerPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits">putInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling">putScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetCustomAudiences">resetCustomAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetInstanceSplits">resetInstanceSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetScaling">resetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization"></a>

```java
public void putBinaryAuthorization(GoogleCloudRunV2WorkerPoolBinaryAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `putInstanceSplits` <a name="putInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits"></a>

```java
public void putInstanceSplits(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolInstanceSplits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putInstanceSplits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>>

---

##### `putScaling` <a name="putScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling"></a>

```java
public void putScaling(GoogleCloudRunV2WorkerPoolScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate"></a>

```java
public void putTemplate(GoogleCloudRunV2WorkerPoolTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudRunV2WorkerPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetBinaryAuthorization"></a>

```java
public void resetBinaryAuthorization()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClient"></a>

```java
public void resetClient()
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetClientVersion"></a>

```java
public void resetClientVersion()
```

##### `resetCustomAudiences` <a name="resetCustomAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetCustomAudiences"></a>

```java
public void resetCustomAudiences()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceSplits` <a name="resetInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetInstanceSplits"></a>

```java
public void resetInstanceSplits()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetLaunchStage"></a>

```java
public void resetLaunchStage()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetProject"></a>

```java
public void resetProject()
```

##### `resetScaling` <a name="resetScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetScaling"></a>

```java
public void resetScaling()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPool;

GoogleCloudRunV2WorkerPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPool;

GoogleCloudRunV2WorkerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPool;

GoogleCloudRunV2WorkerPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPool;

GoogleCloudRunV2WorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudRunV2WorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCloudRunV2WorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudRunV2WorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference">GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList">GoogleCloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplits">instanceSplits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList">GoogleCloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitStatuses">instanceSplitStatuses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lastModifier">lastModifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestCreatedRevision">latestCreatedRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestReadyRevision">latestReadyRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.observedGeneration">observedGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference">GoogleCloudRunV2WorkerPoolScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference">GoogleCloudRunV2WorkerPoolTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList">GoogleCloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference">GoogleCloudRunV2WorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientInput">clientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersionInput">clientVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiencesInput">customAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitsInput">instanceSplitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStageInput">launchStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scalingInput">scalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiences">customAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorization"></a>

```java
public GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference">GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.conditions"></a>

```java
public GoogleCloudRunV2WorkerPoolConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList">GoogleCloudRunV2WorkerPoolConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `instanceSplits`<sup>Required</sup> <a name="instanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplits"></a>

```java
public GoogleCloudRunV2WorkerPoolInstanceSplitsList getInstanceSplits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList">GoogleCloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `instanceSplitStatuses`<sup>Required</sup> <a name="instanceSplitStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```java
public GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList getInstanceSplitStatuses();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.lastModifier"></a>

```java
public java.lang.String getLastModifier();
```

- *Type:* java.lang.String

---

##### `latestCreatedRevision`<sup>Required</sup> <a name="latestCreatedRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```java
public java.lang.String getLatestCreatedRevision();
```

- *Type:* java.lang.String

---

##### `latestReadyRevision`<sup>Required</sup> <a name="latestReadyRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.latestReadyRevision"></a>

```java
public java.lang.String getLatestReadyRevision();
```

- *Type:* java.lang.String

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.observedGeneration"></a>

```java
public java.lang.String getObservedGeneration();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scaling"></a>

```java
public GoogleCloudRunV2WorkerPoolScalingOutputReference getScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference">GoogleCloudRunV2WorkerPoolScalingOutputReference</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.template"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateOutputReference getTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference">GoogleCloudRunV2WorkerPoolTemplateOutputReference</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terminalCondition"></a>

```java
public GoogleCloudRunV2WorkerPoolTerminalConditionList getTerminalCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList">GoogleCloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeouts"></a>

```java
public GoogleCloudRunV2WorkerPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference">GoogleCloudRunV2WorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.binaryAuthorizationInput"></a>

```java
public GoogleCloudRunV2WorkerPoolBinaryAuthorization getBinaryAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientInput"></a>

```java
public java.lang.String getClientInput();
```

- *Type:* java.lang.String

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersionInput"></a>

```java
public java.lang.String getClientVersionInput();
```

- *Type:* java.lang.String

---

##### `customAudiencesInput`<sup>Optional</sup> <a name="customAudiencesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getCustomAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceSplitsInput`<sup>Optional</sup> <a name="instanceSplitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.instanceSplitsInput"></a>

```java
public java.lang.Object getInstanceSplitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStageInput"></a>

```java
public java.lang.String getLaunchStageInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scalingInput`<sup>Optional</sup> <a name="scalingInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.scalingInput"></a>

```java
public GoogleCloudRunV2WorkerPoolScaling getScalingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.templateInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplate getTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `customAudiences`<sup>Required</sup> <a name="customAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.customAudiences"></a>

```java
public java.util.List<java.lang.String> getCustomAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2WorkerPoolBinaryAuthorization <a name="GoogleCloudRunV2WorkerPoolBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolBinaryAuthorization;

GoogleCloudRunV2WorkerPoolBinaryAuthorization.builder()
//  .breakglassJustification(java.lang.String)
//  .policy(java.lang.String)
//  .useDefault(java.lang.Boolean)
//  .useDefault(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification">breakglassJustification</a></code> | <code>java.lang.String</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.policy">policy</a></code> | <code>java.lang.String</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.useDefault">useDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglassJustification`<sup>Optional</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.breakglassJustification"></a>

```java
public java.lang.String getBreakglassJustification();
```

- *Type:* java.lang.String

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#breakglass_justification GoogleCloudRunV2WorkerPool#breakglass_justification}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#policy GoogleCloudRunV2WorkerPool#policy}

---

##### `useDefault`<sup>Optional</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization.property.useDefault"></a>

```java
public java.lang.Object getUseDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#use_default GoogleCloudRunV2WorkerPool#use_default}

---

### GoogleCloudRunV2WorkerPoolConditions <a name="GoogleCloudRunV2WorkerPoolConditions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolConditions;

GoogleCloudRunV2WorkerPoolConditions.builder()
    .build();
```


### GoogleCloudRunV2WorkerPoolConfig <a name="GoogleCloudRunV2WorkerPoolConfig" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolConfig;

GoogleCloudRunV2WorkerPoolConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .template(GoogleCloudRunV2WorkerPoolTemplate)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .binaryAuthorization(GoogleCloudRunV2WorkerPoolBinaryAuthorization)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .customAudiences(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceSplits(IResolvable)
//  .instanceSplits(java.util.List<GoogleCloudRunV2WorkerPoolInstanceSplits>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .project(java.lang.String)
//  .scaling(GoogleCloudRunV2WorkerPoolScaling)
//  .timeouts(GoogleCloudRunV2WorkerPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the WorkerPool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.customAudiences">customAudiences</a></code> | <code>java.util.List<java.lang.String></code> | One or more custom audiences that you want this worker pool to support. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the WorkerPool. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.instanceSplits">instanceSplits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>></code> | instance_splits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#location GoogleCloudRunV2WorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.template"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplate getTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#template GoogleCloudRunV2WorkerPool#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 WorkerPool.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#annotations GoogleCloudRunV2WorkerPool#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.binaryAuthorization"></a>

```java
public GoogleCloudRunV2WorkerPoolBinaryAuthorization getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#binary_authorization GoogleCloudRunV2WorkerPool#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#client GoogleCloudRunV2WorkerPool#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#client_version GoogleCloudRunV2WorkerPool#client_version}

---

##### `customAudiences`<sup>Optional</sup> <a name="customAudiences" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.customAudiences"></a>

```java
public java.util.List<java.lang.String> getCustomAudiences();
```

- *Type:* java.util.List<java.lang.String>

One or more custom audiences that you want this worker pool to support.

Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#custom_audiences GoogleCloudRunV2WorkerPool#custom_audiences}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the service.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the service,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the WorkerPool will fail.
When the field is set to false, deleting the WorkerPool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#deletion_protection GoogleCloudRunV2WorkerPool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of the WorkerPool. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#description GoogleCloudRunV2WorkerPool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#id GoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceSplits`<sup>Optional</sup> <a name="instanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.instanceSplits"></a>

```java
public java.lang.Object getInstanceSplits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>>

instance_splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#instance_splits GoogleCloudRunV2WorkerPool#instance_splits}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPool.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#labels GoogleCloudRunV2WorkerPool#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#launch_stage GoogleCloudRunV2WorkerPool#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#project GoogleCloudRunV2WorkerPool#project}.

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.scaling"></a>

```java
public GoogleCloudRunV2WorkerPoolScaling getScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#scaling GoogleCloudRunV2WorkerPool#scaling}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConfig.property.timeouts"></a>

```java
public GoogleCloudRunV2WorkerPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#timeouts GoogleCloudRunV2WorkerPool#timeouts}

---

### GoogleCloudRunV2WorkerPoolInstanceSplits <a name="GoogleCloudRunV2WorkerPoolInstanceSplits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplits;

GoogleCloudRunV2WorkerPoolInstanceSplits.builder()
//  .percent(java.lang.Number)
//  .revision(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies percent of the instance split to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.revision">revision</a></code> | <code>java.lang.String</code> | Revision to which to assign this portion of instances, if split allocation is by revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.type">type</a></code> | <code>java.lang.String</code> | The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"]. |

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies percent of the instance split to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#percent GoogleCloudRunV2WorkerPool#percent}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Revision to which to assign this portion of instances, if split allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#revision GoogleCloudRunV2WorkerPool#revision}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The allocation type for this instance split. Possible values: ["INSTANCE_SPLIT_ALLOCATION_TYPE_LATEST", "INSTANCE_SPLIT_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#type GoogleCloudRunV2WorkerPool#type}

---

### GoogleCloudRunV2WorkerPoolInstanceSplitStatuses <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses;

GoogleCloudRunV2WorkerPoolInstanceSplitStatuses.builder()
    .build();
```


### GoogleCloudRunV2WorkerPoolScaling <a name="GoogleCloudRunV2WorkerPoolScaling" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolScaling;

GoogleCloudRunV2WorkerPoolScaling.builder()
//  .manualInstanceCount(java.lang.Number)
//  .maxInstanceCount(java.lang.Number)
//  .minInstanceCount(java.lang.Number)
//  .scalingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.manualInstanceCount">manualInstanceCount</a></code> | <code>java.lang.Number</code> | The total number of instances in manual scaling mode. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | The maximum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | The minimum count of instances distributed among revisions based on the specified instance split percentages. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"]. |

---

##### `manualInstanceCount`<sup>Optional</sup> <a name="manualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.manualInstanceCount"></a>

```java
public java.lang.Number getManualInstanceCount();
```

- *Type:* java.lang.Number

The total number of instances in manual scaling mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#manual_instance_count GoogleCloudRunV2WorkerPool#manual_instance_count}

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

The maximum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#max_instance_count GoogleCloudRunV2WorkerPool#max_instance_count}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

The minimum count of instances distributed among revisions based on the specified instance split percentages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#min_instance_count GoogleCloudRunV2WorkerPool#min_instance_count}

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

The scaling mode for the worker pool. It defaults to MANUAL. Possible values: ["AUTOMATIC", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#scaling_mode GoogleCloudRunV2WorkerPool#scaling_mode}

---

### GoogleCloudRunV2WorkerPoolTemplate <a name="GoogleCloudRunV2WorkerPoolTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplate;

GoogleCloudRunV2WorkerPoolTemplate.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .containers(IResolvable)
//  .containers(java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainers>)
//  .encryptionKey(java.lang.String)
//  .encryptionKeyRevocationAction(java.lang.String)
//  .encryptionKeyShutdownDuration(java.lang.String)
//  .gpuZonalRedundancyDisabled(java.lang.Boolean)
//  .gpuZonalRedundancyDisabled(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeSelector(GoogleCloudRunV2WorkerPoolTemplateNodeSelector)
//  .revision(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<GoogleCloudRunV2WorkerPoolTemplateVolumes>)
//  .vpcAccess(GoogleCloudRunV2WorkerPoolTemplateVpcAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.containers">containers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>></code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled">gpuZonalRedundancyDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if GPU zonal redundancy is disabled on this revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.nodeSelector">nodeSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | node_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.revision">revision</a></code> | <code>java.lang.String</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Email address of the IAM service account associated with the revision of the WorkerPool. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#annotations GoogleCloudRunV2WorkerPool#annotations}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.containers"></a>

```java
public java.lang.Object getContainers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#containers GoogleCloudRunV2WorkerPool#containers}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#encryption_key GoogleCloudRunV2WorkerPool#encryption_key}

---

##### `encryptionKeyRevocationAction`<sup>Optional</sup> <a name="encryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyRevocationAction"></a>

```java
public java.lang.String getEncryptionKeyRevocationAction();
```

- *Type:* java.lang.String

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#encryption_key_revocation_action GoogleCloudRunV2WorkerPool#encryption_key_revocation_action}

---

##### `encryptionKeyShutdownDuration`<sup>Optional</sup> <a name="encryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.encryptionKeyShutdownDuration"></a>

```java
public java.lang.String getEncryptionKeyShutdownDuration();
```

- *Type:* java.lang.String

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#encryption_key_shutdown_duration GoogleCloudRunV2WorkerPool#encryption_key_shutdown_duration}

---

##### `gpuZonalRedundancyDisabled`<sup>Optional</sup> <a name="gpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.gpuZonalRedundancyDisabled"></a>

```java
public java.lang.Object getGpuZonalRedundancyDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if GPU zonal redundancy is disabled on this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#gpu_zonal_redundancy_disabled GoogleCloudRunV2WorkerPool#gpu_zonal_redundancy_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#labels GoogleCloudRunV2WorkerPool#labels}

---

##### `nodeSelector`<sup>Optional</sup> <a name="nodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.nodeSelector"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateNodeSelector getNodeSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

node_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#node_selector GoogleCloudRunV2WorkerPool#node_selector}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the WorkerPool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#revision GoogleCloudRunV2WorkerPool#revision}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Email address of the IAM service account associated with the revision of the WorkerPool.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#service_account GoogleCloudRunV2WorkerPool#service_account}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#volumes GoogleCloudRunV2WorkerPool#volumes}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate.property.vpcAccess"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccess getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#vpc_access GoogleCloudRunV2WorkerPool#vpc_access}

---

### GoogleCloudRunV2WorkerPoolTemplateContainers <a name="GoogleCloudRunV2WorkerPoolTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainers;

GoogleCloudRunV2WorkerPoolTemplateContainers.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .dependsOn(java.util.List<java.lang.String>)
//  .env(IResolvable)
//  .env(java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainersEnv>)
//  .name(java.lang.String)
//  .resources(GoogleCloudRunV2WorkerPoolTemplateContainersResources)
//  .volumeMounts(IResolvable)
//  .volumeMounts(java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts>)
//  .workingDir(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.image">image</a></code> | <code>java.lang.String</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.env">env</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>></code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.name">name</a></code> | <code>java.lang.String</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.volumeMounts">volumeMounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>></code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#image GoogleCloudRunV2WorkerPool#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#args GoogleCloudRunV2WorkerPool#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#command GoogleCloudRunV2WorkerPool#command}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#depends_on GoogleCloudRunV2WorkerPool#depends_on}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.env"></a>

```java
public java.lang.Object getEnv();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#env GoogleCloudRunV2WorkerPool#env}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.resources"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersResources getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#resources GoogleCloudRunV2WorkerPool#resources}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.volumeMounts"></a>

```java
public java.lang.Object getVolumeMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>>

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#volume_mounts GoogleCloudRunV2WorkerPool#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#working_dir GoogleCloudRunV2WorkerPool#working_dir}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnv <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv;

GoogleCloudRunV2WorkerPoolTemplateContainersEnv.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
//  .valueSource(GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.value">value</a></code> | <code>java.lang.String</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#value GoogleCloudRunV2WorkerPool#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv.property.valueSource"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource getValueSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#value_source GoogleCloudRunV2WorkerPool#value_source}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource;

GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.builder()
//  .secretKeyRef(GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef getSecretKeyRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#secret_key_ref GoogleCloudRunV2WorkerPool#secret_key_ref}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef;

GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.builder()
    .secret(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#version GoogleCloudRunV2WorkerPool#version}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersResources <a name="GoogleCloudRunV2WorkerPoolTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersResources;

GoogleCloudRunV2WorkerPoolTemplateContainersResources.builder()
//  .limits(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#limits GoogleCloudRunV2WorkerPool#limits}

---

### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts;

GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.builder()
    .mountPath(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name">name</a></code> | <code>java.lang.String</code> | This must match the Name of a Volume. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#mount_path GoogleCloudRunV2WorkerPool#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

### GoogleCloudRunV2WorkerPoolTemplateNodeSelector <a name="GoogleCloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector;

GoogleCloudRunV2WorkerPoolTemplateNodeSelector.builder()
    .accelerator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator">accelerator</a></code> | <code>java.lang.String</code> | The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU. |

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector.property.accelerator"></a>

```java
public java.lang.String getAccelerator();
```

- *Type:* java.lang.String

The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#accelerator GoogleCloudRunV2WorkerPool#accelerator}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumes <a name="GoogleCloudRunV2WorkerPoolTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumes;

GoogleCloudRunV2WorkerPoolTemplateVolumes.builder()
    .name(java.lang.String)
//  .cloudSqlInstance(GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance)
//  .emptyDir(GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir)
//  .gcs(GoogleCloudRunV2WorkerPoolTemplateVolumesGcs)
//  .nfs(GoogleCloudRunV2WorkerPoolTemplateVolumesNfs)
//  .secret(GoogleCloudRunV2WorkerPoolTemplateVolumesSecret)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#name GoogleCloudRunV2WorkerPool#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance getCloudSqlInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#cloud_sql_instance GoogleCloudRunV2WorkerPool#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.emptyDir"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir getEmptyDir();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#empty_dir GoogleCloudRunV2WorkerPool#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.gcs"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesGcs getGcs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#gcs GoogleCloudRunV2WorkerPool#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.nfs"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesNfs getNfs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#nfs GoogleCloudRunV2WorkerPool#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes.property.secret"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecret getSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance;

GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.builder()
//  .instances(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#instances GoogleCloudRunV2WorkerPool#instances}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir;

GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.builder()
//  .medium(java.lang.String)
//  .sizeLimit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium">medium</a></code> | <code>java.lang.String</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#medium GoogleCloudRunV2WorkerPool#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#size_limit GoogleCloudRunV2WorkerPool#size_limit}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesGcs <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs;

GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.builder()
    .bucket(java.lang.String)
//  .mountOptions(java.util.List<java.lang.String>)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket">bucket</a></code> | <code>java.lang.String</code> | GCS Bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#bucket GoogleCloudRunV2WorkerPool#bucket}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#mount_options GoogleCloudRunV2WorkerPool#mount_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#read_only GoogleCloudRunV2WorkerPool#read_only}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesNfs <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs;

GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.builder()
    .path(java.lang.String)
    .server(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.path">path</a></code> | <code>java.lang.String</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.server">server</a></code> | <code>java.lang.String</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#path GoogleCloudRunV2WorkerPool#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#server GoogleCloudRunV2WorkerPool#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#read_only GoogleCloudRunV2WorkerPool#read_only}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesSecret <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret;

GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.builder()
    .secret(java.lang.String)
//  .defaultMode(java.lang.Number)
//  .items(IResolvable)
//  .items(java.util.List<GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>></code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#secret GoogleCloudRunV2WorkerPool#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#default_mode GoogleCloudRunV2WorkerPool#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#items GoogleCloudRunV2WorkerPool#items}

---

### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems;

GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.builder()
    .path(java.lang.String)
//  .mode(java.lang.Number)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path">path</a></code> | <code>java.lang.String</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>java.lang.Number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#path GoogleCloudRunV2WorkerPool#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#mode GoogleCloudRunV2WorkerPool#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#version GoogleCloudRunV2WorkerPool#version}

---

### GoogleCloudRunV2WorkerPoolTemplateVpcAccess <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess;

GoogleCloudRunV2WorkerPoolTemplateVpcAccess.builder()
//  .egress(java.lang.String)
//  .networkInterfaces(IResolvable)
//  .networkInterfaces(java.util.List<GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.egress">egress</a></code> | <code>java.lang.String</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces">networkInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>></code> | network_interfaces block. |

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.egress"></a>

```java
public java.lang.String getEgress();
```

- *Type:* java.lang.String

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#egress GoogleCloudRunV2WorkerPool#egress}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess.property.networkInterfaces"></a>

```java
public java.lang.Object getNetworkInterfaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>>

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#network_interfaces GoogleCloudRunV2WorkerPool#network_interfaces}

---

### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces;

GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.builder()
//  .network(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network">network</a></code> | <code>java.lang.String</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Network tags applied to this Cloud Run WorkerPool. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#network GoogleCloudRunV2WorkerPool#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#subnetwork GoogleCloudRunV2WorkerPool#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Network tags applied to this Cloud Run WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#tags GoogleCloudRunV2WorkerPool#tags}

---

### GoogleCloudRunV2WorkerPoolTerminalCondition <a name="GoogleCloudRunV2WorkerPoolTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTerminalCondition;

GoogleCloudRunV2WorkerPoolTerminalCondition.builder()
    .build();
```


### GoogleCloudRunV2WorkerPoolTimeouts <a name="GoogleCloudRunV2WorkerPoolTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTimeouts;

GoogleCloudRunV2WorkerPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#create GoogleCloudRunV2WorkerPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#delete GoogleCloudRunV2WorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#update GoogleCloudRunV2WorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#create GoogleCloudRunV2WorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#delete GoogleCloudRunV2WorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_cloud_run_v2_worker_pool#update GoogleCloudRunV2WorkerPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference;

new GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification">resetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault">resetUseDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakglassJustification` <a name="resetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```java
public void resetBreakglassJustification()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetUseDefault` <a name="resetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resetUseDefault"></a>

```java
public void resetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglassJustificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput">useDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `breakglassJustificationInput`<sup>Optional</sup> <a name="breakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```java
public java.lang.String getBreakglassJustificationInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```java
public java.lang.Object getUseDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```java
public java.lang.String getBreakglassJustification();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```java
public java.lang.Object getUseDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolBinaryAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolBinaryAuthorization">GoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---


### GoogleCloudRunV2WorkerPoolConditionsList <a name="GoogleCloudRunV2WorkerPoolConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolConditionsList;

new GoogleCloudRunV2WorkerPoolConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2WorkerPoolConditionsOutputReference <a name="GoogleCloudRunV2WorkerPoolConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolConditionsOutputReference;

new GoogleCloudRunV2WorkerPoolConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions">GoogleCloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolConditions">GoogleCloudRunV2WorkerPoolConditions</a>

---


### GoogleCloudRunV2WorkerPoolInstanceSplitsList <a name="GoogleCloudRunV2WorkerPoolInstanceSplitsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplitsList;

new GoogleCloudRunV2WorkerPoolInstanceSplitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>>

---


### GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference;

new GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent">resetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetPercent"></a>

```java
public void resetPercent()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplits">GoogleCloudRunV2WorkerPoolInstanceSplits</a>

---


### GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList;

new GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference;

new GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses">GoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolInstanceSplitStatuses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolInstanceSplitStatuses">GoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### GoogleCloudRunV2WorkerPoolScalingOutputReference <a name="GoogleCloudRunV2WorkerPoolScalingOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolScalingOutputReference;

new GoogleCloudRunV2WorkerPoolScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount">resetManualInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetScalingMode">resetScalingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManualInstanceCount` <a name="resetManualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetManualInstanceCount"></a>

```java
public void resetManualInstanceCount()
```

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMaxInstanceCount"></a>

```java
public void resetMaxInstanceCount()
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetMinInstanceCount"></a>

```java
public void resetMinInstanceCount()
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.resetScalingMode"></a>

```java
public void resetScalingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput">manualInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput">scalingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">manualInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualInstanceCountInput`<sup>Optional</sup> <a name="manualInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCountInput"></a>

```java
public java.lang.Number getManualInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingModeInput"></a>

```java
public java.lang.String getScalingModeInput();
```

- *Type:* java.lang.String

---

##### `manualInstanceCount`<sup>Required</sup> <a name="manualInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```java
public java.lang.Number getManualInstanceCount();
```

- *Type:* java.lang.Number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolScaling">GoogleCloudRunV2WorkerPoolScaling</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList;

new GoogleCloudRunV2WorkerPoolTemplateContainersEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource"></a>

```java
public void putValueSource(GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resetValueSource"></a>

```java
public void resetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference getValueSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource getValueSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```java
public void putSecretKeyRef(GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```java
public void resetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference getSecretKeyRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef getSecretKeyRefInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersList;

new GoogleCloudRunV2WorkerPoolTemplateContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainersEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources"></a>

```java
public void putResources(GoogleCloudRunV2WorkerPoolTemplateContainersResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts"></a>

```java
public void putVolumeMounts(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetVolumeMounts"></a>

```java
public void resetVolumeMounts()
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resetWorkingDir"></a>

```java
public void resetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList">GoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput">envInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnvList">GoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference">GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.envInput"></a>

```java
public java.lang.Object getEnvInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersEnv">GoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resourcesInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersResources getResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMountsInput"></a>

```java
public java.lang.Object getVolumeMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>>

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDirInput"></a>

```java
public java.lang.String getWorkingDirInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resetLimits"></a>

```java
public void resetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimitsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersResources">GoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList;

new GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">GoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>

---


### GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput">acceleratorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">accelerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorInput`<sup>Optional</sup> <a name="acceleratorInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.acceleratorInput"></a>

```java
public java.lang.String getAcceleratorInput();
```

- *Type:* java.lang.String

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```java
public java.lang.String getAccelerator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateNodeSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### GoogleCloudRunV2WorkerPoolTemplateOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector">putNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction">resetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration">resetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled">resetGpuZonalRedundancyDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector">resetNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers"></a>

```java
public void putContainers(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateContainers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>>

---

##### `putNodeSelector` <a name="putNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector"></a>

```java
public void putNodeSelector(GoogleCloudRunV2WorkerPoolTemplateNodeSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putNodeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>>

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess"></a>

```java
public void putVpcAccess(GoogleCloudRunV2WorkerPoolTemplateVpcAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetContainers"></a>

```java
public void resetContainers()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetEncryptionKeyRevocationAction` <a name="resetEncryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyRevocationAction"></a>

```java
public void resetEncryptionKeyRevocationAction()
```

##### `resetEncryptionKeyShutdownDuration` <a name="resetEncryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetEncryptionKeyShutdownDuration"></a>

```java
public void resetEncryptionKeyShutdownDuration()
```

##### `resetGpuZonalRedundancyDisabled` <a name="resetGpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetGpuZonalRedundancyDisabled"></a>

```java
public void resetGpuZonalRedundancyDisabled()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNodeSelector` <a name="resetNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetNodeSelector"></a>

```java
public void resetNodeSelector()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.resetVpcAccess"></a>

```java
public void resetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList">GoogleCloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">nodeSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList">GoogleCloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference">GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containersInput">containersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput">encryptionKeyRevocationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput">encryptionKeyShutdownDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput">gpuZonalRedundancyDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput">nodeSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">gpuZonalRedundancyDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateContainersList getContainers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainersList">GoogleCloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `nodeSelector`<sup>Required</sup> <a name="nodeSelector" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference getNodeSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference">GoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList">GoogleCloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference">GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containersInput"></a>

```java
public java.lang.Object getContainersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateContainers">GoogleCloudRunV2WorkerPoolTemplateContainers</a>>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="encryptionKeyRevocationActionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationActionInput"></a>

```java
public java.lang.String getEncryptionKeyRevocationActionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="encryptionKeyShutdownDurationInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDurationInput"></a>

```java
public java.lang.String getEncryptionKeyShutdownDurationInput();
```

- *Type:* java.lang.String

---

##### `gpuZonalRedundancyDisabledInput`<sup>Optional</sup> <a name="gpuZonalRedundancyDisabledInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabledInput"></a>

```java
public java.lang.Object getGpuZonalRedundancyDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeSelectorInput`<sup>Optional</sup> <a name="nodeSelectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelectorInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateNodeSelector getNodeSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateNodeSelector">GoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>>

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccessInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccess getVpcAccessInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```java
public java.lang.String getEncryptionKeyRevocationAction();
```

- *Type:* java.lang.String

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```java
public java.lang.String getEncryptionKeyShutdownDuration();
```

- *Type:* java.lang.String

---

##### `gpuZonalRedundancyDisabled`<sup>Required</sup> <a name="gpuZonalRedundancyDisabled" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```java
public java.lang.Object getGpuZonalRedundancyDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplate">GoogleCloudRunV2WorkerPoolTemplate</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```java
public void resetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```java
public void resetMedium()
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```java
public void resetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```java
public java.lang.String getMediumInput();
```

- *Type:* java.lang.String

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```java
public java.lang.String getSizeLimitInput();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesGcs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesList <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesList;

new GoogleCloudRunV2WorkerPoolTemplateVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesNfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```java
public void putCloudSqlInstance(GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir"></a>

```java
public void putEmptyDir(GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `putGcs` <a name="putGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs"></a>

```java
public void putGcs(GoogleCloudRunV2WorkerPoolTemplateVolumesGcs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs"></a>

```java
public void putNfs(GoogleCloudRunV2WorkerPoolTemplateVolumesNfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret"></a>

```java
public void putSecret(GoogleCloudRunV2WorkerPoolTemplateVolumesSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```java
public void resetCloudSqlInstance()
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetEmptyDir"></a>

```java
public void resetEmptyDir()
```

##### `resetGcs` <a name="resetGcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetGcs"></a>

```java
public void resetGcs()
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetNfs"></a>

```java
public void resetNfs()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference getCloudSqlInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference getEmptyDir();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference getGcs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference getNfs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference getSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance getCloudSqlInstanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">GoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDirInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir getEmptyDirInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">GoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcsInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesGcs getGcsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesGcs">GoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfsInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesNfs getNfsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesNfs">GoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secretInput"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecret getSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumes">GoogleCloudRunV2WorkerPoolTemplateVolumes</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList;

new GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>>

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```java
public void resetDefaultMode()
```

##### `resetItems` <a name="resetItems" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList getItems();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```java
public java.lang.Number getDefaultModeInput();
```

- *Type:* java.lang.Number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">GoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVolumesSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVolumesSecret">GoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList;

new GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>>

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>

---


### GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference;

new GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable OR java.util.List<GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>>

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```java
public void resetNetworkInterfaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput">egressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egressInput"></a>

```java
public java.lang.String getEgressInput();
```

- *Type:* java.lang.String

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```java
public java.lang.Object getNetworkInterfacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```java
public java.lang.String getEgress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTemplateVpcAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTemplateVpcAccess">GoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### GoogleCloudRunV2WorkerPoolTerminalConditionList <a name="GoogleCloudRunV2WorkerPoolTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTerminalConditionList;

new GoogleCloudRunV2WorkerPoolTerminalConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get"></a>

```java
public GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference <a name="GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference;

new GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition">GoogleCloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2WorkerPoolTerminalCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTerminalCondition">GoogleCloudRunV2WorkerPoolTerminalCondition</a>

---


### GoogleCloudRunV2WorkerPoolTimeoutsOutputReference <a name="GoogleCloudRunV2WorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_worker_pool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference;

new GoogleCloudRunV2WorkerPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2WorkerPool.GoogleCloudRunV2WorkerPoolTimeouts">GoogleCloudRunV2WorkerPoolTimeouts</a>

---



