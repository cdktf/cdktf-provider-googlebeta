# `google_cloud_run_v2_service`

Refer to the Terraform Registory for docs: [`google_cloud_run_v2_service`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service).

# `googleCloudRunV2Service` Submodule <a name="`googleCloudRunV2Service` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Service <a name="GoogleCloudRunV2Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service google_cloud_run_v2_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2Service;

GoogleCloudRunV2Service.Builder.create(Construct scope, java.lang.String id)
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
    .template(GoogleCloudRunV2ServiceTemplate)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .binaryAuthorization(GoogleCloudRunV2ServiceBinaryAuthorization)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ingress(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCloudRunV2ServiceTimeouts)
//  .traffic(IResolvable)
//  .traffic(java.util.List<GoogleCloudRunV2ServiceTraffic>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.ingress">ingress</a></code> | <code>java.lang.String</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.traffic">traffic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>></code> | traffic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#template GoogleCloudRunV2Service#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#annotations GoogleCloudRunV2Service#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#binary_authorization GoogleCloudRunV2Service#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.client"></a>

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#client GoogleCloudRunV2Service#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.clientVersion"></a>

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#client_version GoogleCloudRunV2Service#client_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#description GoogleCloudRunV2Service#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.ingress"></a>

- *Type:* java.lang.String

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#ingress GoogleCloudRunV2Service#ingress}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#labels GoogleCloudRunV2Service#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.launchStage"></a>

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#launch_stage GoogleCloudRunV2Service#launch_stage}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the cloud run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#location GoogleCloudRunV2Service#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#timeouts GoogleCloudRunV2Service#timeouts}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.traffic"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#traffic GoogleCloudRunV2Service#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic">putTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization"></a>

```java
public void putBinaryAuthorization(GoogleCloudRunV2ServiceBinaryAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate"></a>

```java
public void putTemplate(GoogleCloudRunV2ServiceTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudRunV2ServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

---

##### `putTraffic` <a name="putTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic"></a>

```java
public void putTraffic(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTraffic> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetBinaryAuthorization"></a>

```java
public void resetBinaryAuthorization()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClient"></a>

```java
public void resetClient()
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClientVersion"></a>

```java
public void resetClientVersion()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetId"></a>

```java
public void resetId()
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLaunchStage"></a>

```java
public void resetLaunchStage()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTraffic"></a>

```java
public void resetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2Service;

GoogleCloudRunV2Service.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2Service;

GoogleCloudRunV2Service.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2Service;

GoogleCloudRunV2Service.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference">GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList">GoogleCloudRunV2ServiceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestCreatedRevision">latestCreatedRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestReadyRevision">latestReadyRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.observedGeneration">observedGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference">GoogleCloudRunV2ServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList">GoogleCloudRunV2ServiceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference">GoogleCloudRunV2ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList">GoogleCloudRunV2ServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficStatuses">trafficStatuses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList">GoogleCloudRunV2ServiceTrafficStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientInput">clientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersionInput">clientVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingressInput">ingressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStageInput">launchStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficInput">trafficInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingress">ingress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorization"></a>

```java
public GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference">GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.conditions"></a>

```java
public GoogleCloudRunV2ServiceConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList">GoogleCloudRunV2ServiceConditionsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `latestCreatedRevision`<sup>Required</sup> <a name="latestCreatedRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestCreatedRevision"></a>

```java
public java.lang.String getLatestCreatedRevision();
```

- *Type:* java.lang.String

---

##### `latestReadyRevision`<sup>Required</sup> <a name="latestReadyRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestReadyRevision"></a>

```java
public java.lang.String getLatestReadyRevision();
```

- *Type:* java.lang.String

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.observedGeneration"></a>

```java
public java.lang.String getObservedGeneration();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.template"></a>

```java
public GoogleCloudRunV2ServiceTemplateOutputReference getTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference">GoogleCloudRunV2ServiceTemplateOutputReference</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terminalCondition"></a>

```java
public GoogleCloudRunV2ServiceTerminalConditionList getTerminalCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList">GoogleCloudRunV2ServiceTerminalConditionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeouts"></a>

```java
public GoogleCloudRunV2ServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference">GoogleCloudRunV2ServiceTimeoutsOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.traffic"></a>

```java
public GoogleCloudRunV2ServiceTrafficList getTraffic();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList">GoogleCloudRunV2ServiceTrafficList</a>

---

##### `trafficStatuses`<sup>Required</sup> <a name="trafficStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficStatuses"></a>

```java
public GoogleCloudRunV2ServiceTrafficStatusesList getTrafficStatuses();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList">GoogleCloudRunV2ServiceTrafficStatusesList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorizationInput"></a>

```java
public GoogleCloudRunV2ServiceBinaryAuthorization getBinaryAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientInput"></a>

```java
public java.lang.String getClientInput();
```

- *Type:* java.lang.String

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersionInput"></a>

```java
public java.lang.String getClientVersionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingressInput"></a>

```java
public java.lang.String getIngressInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStageInput"></a>

```java
public java.lang.String getLaunchStageInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.templateInput"></a>

```java
public GoogleCloudRunV2ServiceTemplate getTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficInput"></a>

```java
public java.lang.Object getTrafficInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingress"></a>

```java
public java.lang.String getIngress();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2ServiceBinaryAuthorization <a name="GoogleCloudRunV2ServiceBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceBinaryAuthorization;

GoogleCloudRunV2ServiceBinaryAuthorization.builder()
//  .breakglassJustification(java.lang.String)
//  .useDefault(java.lang.Boolean)
//  .useDefault(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.breakglassJustification">breakglassJustification</a></code> | <code>java.lang.String</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.useDefault">useDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglassJustification`<sup>Optional</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.breakglassJustification"></a>

```java
public java.lang.String getBreakglassJustification();
```

- *Type:* java.lang.String

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#breakglass_justification GoogleCloudRunV2Service#breakglass_justification}

---

##### `useDefault`<sup>Optional</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.useDefault"></a>

```java
public java.lang.Object getUseDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#use_default GoogleCloudRunV2Service#use_default}

---

### GoogleCloudRunV2ServiceConditions <a name="GoogleCloudRunV2ServiceConditions" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceConditions;

GoogleCloudRunV2ServiceConditions.builder()
    .build();
```


### GoogleCloudRunV2ServiceConfig <a name="GoogleCloudRunV2ServiceConfig" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceConfig;

GoogleCloudRunV2ServiceConfig.builder()
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
    .template(GoogleCloudRunV2ServiceTemplate)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .binaryAuthorization(GoogleCloudRunV2ServiceBinaryAuthorization)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ingress(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCloudRunV2ServiceTimeouts)
//  .traffic(IResolvable)
//  .traffic(java.util.List<GoogleCloudRunV2ServiceTraffic>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.ingress">ingress</a></code> | <code>java.lang.String</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.traffic">traffic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>></code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.template"></a>

```java
public GoogleCloudRunV2ServiceTemplate getTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#template GoogleCloudRunV2Service#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#annotations GoogleCloudRunV2Service#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.binaryAuthorization"></a>

```java
public GoogleCloudRunV2ServiceBinaryAuthorization getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#binary_authorization GoogleCloudRunV2Service#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#client GoogleCloudRunV2Service#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#client_version GoogleCloudRunV2Service#client_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#description GoogleCloudRunV2Service#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.ingress"></a>

```java
public java.lang.String getIngress();
```

- *Type:* java.lang.String

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#ingress GoogleCloudRunV2Service#ingress}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#labels GoogleCloudRunV2Service#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#launch_stage GoogleCloudRunV2Service#launch_stage}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the cloud run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#location GoogleCloudRunV2Service#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.timeouts"></a>

```java
public GoogleCloudRunV2ServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#timeouts GoogleCloudRunV2Service#timeouts}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.traffic"></a>

```java
public java.lang.Object getTraffic();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#traffic GoogleCloudRunV2Service#traffic}

---

### GoogleCloudRunV2ServiceTemplate <a name="GoogleCloudRunV2ServiceTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplate;

GoogleCloudRunV2ServiceTemplate.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .containers(IResolvable)
//  .containers(java.util.List<GoogleCloudRunV2ServiceTemplateContainers>)
//  .encryptionKey(java.lang.String)
//  .executionEnvironment(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxInstanceRequestConcurrency(java.lang.Number)
//  .revision(java.lang.String)
//  .scaling(GoogleCloudRunV2ServiceTemplateScaling)
//  .serviceAccount(java.lang.String)
//  .sessionAffinity(java.lang.Boolean)
//  .sessionAffinity(IResolvable)
//  .timeout(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<GoogleCloudRunV2ServiceTemplateVolumes>)
//  .vpcAccess(GoogleCloudRunV2ServiceTemplateVpcAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.containers">containers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>></code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.executionEnvironment">executionEnvironment</a></code> | <code>java.lang.String</code> | The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>java.lang.Number</code> | Sets the maximum number of requests that each serving instance can receive. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.revision">revision</a></code> | <code>java.lang.String</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Max allowed time for an instance to respond to a request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#annotations GoogleCloudRunV2Service#annotations}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.containers"></a>

```java
public java.lang.Object getContainers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#containers GoogleCloudRunV2Service#containers}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#encryption_key GoogleCloudRunV2Service#encryption_key}

---

##### `executionEnvironment`<sup>Optional</sup> <a name="executionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.executionEnvironment"></a>

```java
public java.lang.String getExecutionEnvironment();
```

- *Type:* java.lang.String

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#execution_environment GoogleCloudRunV2Service#execution_environment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#labels GoogleCloudRunV2Service#labels}

---

##### `maxInstanceRequestConcurrency`<sup>Optional</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrency();
```

- *Type:* java.lang.Number

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#max_instance_request_concurrency GoogleCloudRunV2Service#max_instance_request_concurrency}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#revision GoogleCloudRunV2Service#revision}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.scaling"></a>

```java
public GoogleCloudRunV2ServiceTemplateScaling getScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#scaling GoogleCloudRunV2Service#scaling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#service_account GoogleCloudRunV2Service#service_account}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.sessionAffinity"></a>

```java
public java.lang.Object getSessionAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#session_affinity GoogleCloudRunV2Service#session_affinity}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#timeout GoogleCloudRunV2Service#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#volumes GoogleCloudRunV2Service#volumes}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.vpcAccess"></a>

```java
public GoogleCloudRunV2ServiceTemplateVpcAccess getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#vpc_access GoogleCloudRunV2Service#vpc_access}

---

### GoogleCloudRunV2ServiceTemplateContainers <a name="GoogleCloudRunV2ServiceTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainers;

GoogleCloudRunV2ServiceTemplateContainers.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .dependsOn(java.util.List<java.lang.String>)
//  .env(IResolvable)
//  .env(java.util.List<GoogleCloudRunV2ServiceTemplateContainersEnv>)
//  .livenessProbe(GoogleCloudRunV2ServiceTemplateContainersLivenessProbe)
//  .name(java.lang.String)
//  .ports(IResolvable)
//  .ports(java.util.List<GoogleCloudRunV2ServiceTemplateContainersPorts>)
//  .resources(GoogleCloudRunV2ServiceTemplateContainersResources)
//  .startupProbe(GoogleCloudRunV2ServiceTemplateContainersStartupProbe)
//  .volumeMounts(IResolvable)
//  .volumeMounts(java.util.List<GoogleCloudRunV2ServiceTemplateContainersVolumeMounts>)
//  .workingDir(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.image">image</a></code> | <code>java.lang.String</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.env">env</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>></code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.name">name</a></code> | <code>java.lang.String</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.ports">ports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>></code> | ports block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.volumeMounts">volumeMounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>></code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#image GoogleCloudRunV2Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#args GoogleCloudRunV2Service#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#command GoogleCloudRunV2Service#command}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#depends_on GoogleCloudRunV2Service#depends_on}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.env"></a>

```java
public java.lang.Object getEnv();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#env GoogleCloudRunV2Service#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.livenessProbe"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#liveness_probe GoogleCloudRunV2Service#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.ports"></a>

```java
public java.lang.Object getPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#ports GoogleCloudRunV2Service#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.resources"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersResources getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#resources GoogleCloudRunV2Service#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.startupProbe"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe getStartupProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#startup_probe GoogleCloudRunV2Service#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.volumeMounts"></a>

```java
public java.lang.Object getVolumeMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>>

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#volume_mounts GoogleCloudRunV2Service#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#working_dir GoogleCloudRunV2Service#working_dir}

---

### GoogleCloudRunV2ServiceTemplateContainersEnv <a name="GoogleCloudRunV2ServiceTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnv;

GoogleCloudRunV2ServiceTemplateContainersEnv.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
//  .valueSource(GoogleCloudRunV2ServiceTemplateContainersEnvValueSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.valueSource"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource getValueSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#value_source GoogleCloudRunV2Service#value_source}

---

### GoogleCloudRunV2ServiceTemplateContainersEnvValueSource <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource;

GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.builder()
//  .secretKeyRef(GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef getSecretKeyRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#secret_key_ref GoogleCloudRunV2Service#secret_key_ref}

---

### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef;

GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.builder()
    .secret(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#version GoogleCloudRunV2Service#version}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbe <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe;

GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.builder()
//  .failureThreshold(java.lang.Number)
//  .grpc(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc)
//  .httpGet(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .tcpSocket(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#failure_threshold GoogleCloudRunV2Service#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#grpc GoogleCloudRunV2Service#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#http_get GoogleCloudRunV2Service#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#initial_delay_seconds GoogleCloudRunV2Service#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#period_seconds GoogleCloudRunV2Service#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket getTcpSocket();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#tcp_socket GoogleCloudRunV2Service#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#timeout_seconds GoogleCloudRunV2Service#timeout_seconds}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc;

GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.builder()
//  .port(java.lang.Number)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service">service</a></code> | <code>java.lang.String</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#service GoogleCloudRunV2Service#service}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet;

GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.builder()
//  .httpHeaders(IResolvable)
//  .httpHeaders(java.util.List<GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>></code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```java
public java.lang.Object getHttpHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>>

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#http_headers GoogleCloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders;

GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket;

GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.builder()
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersPorts <a name="GoogleCloudRunV2ServiceTemplateContainersPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersPorts;

GoogleCloudRunV2ServiceTemplateContainersPorts.builder()
//  .containerPort(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.name">name</a></code> | <code>java.lang.String</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#container_port GoogleCloudRunV2Service#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

### GoogleCloudRunV2ServiceTemplateContainersResources <a name="GoogleCloudRunV2ServiceTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersResources;

GoogleCloudRunV2ServiceTemplateContainersResources.builder()
//  .cpuIdle(java.lang.Boolean)
//  .cpuIdle(IResolvable)
//  .limits(java.util.Map<java.lang.String, java.lang.String>)
//  .startupCpuBoost(java.lang.Boolean)
//  .startupCpuBoost(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.cpuIdle">cpuIdle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether CPU should be throttled or not outside of requests. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only memory and CPU are supported. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost">startupCpuBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. |

---

##### `cpuIdle`<sup>Optional</sup> <a name="cpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.cpuIdle"></a>

```java
public java.lang.Object getCpuIdle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether CPU should be throttled or not outside of requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#cpu_idle GoogleCloudRunV2Service#cpu_idle}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only memory and CPU are supported.

Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#limits GoogleCloudRunV2Service#limits}

---

##### `startupCpuBoost`<sup>Optional</sup> <a name="startupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost"></a>

```java
public java.lang.Object getStartupCpuBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#startup_cpu_boost GoogleCloudRunV2Service#startup_cpu_boost}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbe <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe;

GoogleCloudRunV2ServiceTemplateContainersStartupProbe.builder()
//  .failureThreshold(java.lang.Number)
//  .grpc(GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc)
//  .httpGet(GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .tcpSocket(GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#failure_threshold GoogleCloudRunV2Service#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.grpc"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#grpc GoogleCloudRunV2Service#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#http_get GoogleCloudRunV2Service#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#initial_delay_seconds GoogleCloudRunV2Service#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#period_seconds GoogleCloudRunV2Service#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket getTcpSocket();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#tcp_socket GoogleCloudRunV2Service#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#timeout_seconds GoogleCloudRunV2Service#timeout_seconds}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc;

GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.builder()
//  .port(java.lang.Number)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service">service</a></code> | <code>java.lang.String</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#service GoogleCloudRunV2Service#service}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet;

GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.builder()
//  .httpHeaders(IResolvable)
//  .httpHeaders(java.util.List<GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>></code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```java
public java.lang.Object getHttpHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>>

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#http_headers GoogleCloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders;

GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket;

GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.builder()
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersVolumeMounts <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts;

GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.builder()
    .mountPath(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.name">name</a></code> | <code>java.lang.String</code> | This must match the Name of a Volume. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#mount_path GoogleCloudRunV2Service#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

### GoogleCloudRunV2ServiceTemplateScaling <a name="GoogleCloudRunV2ServiceTemplateScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateScaling;

GoogleCloudRunV2ServiceTemplateScaling.builder()
//  .maxInstanceCount(java.lang.Number)
//  .minInstanceCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum number of serving instances that this resource should have. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum number of serving instances that this resource should have. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#max_instance_count GoogleCloudRunV2Service#max_instance_count}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#min_instance_count GoogleCloudRunV2Service#min_instance_count}

---

### GoogleCloudRunV2ServiceTemplateVolumes <a name="GoogleCloudRunV2ServiceTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumes;

GoogleCloudRunV2ServiceTemplateVolumes.builder()
    .name(java.lang.String)
//  .cloudSqlInstance(GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance)
//  .emptyDir(GoogleCloudRunV2ServiceTemplateVolumesEmptyDir)
//  .secret(GoogleCloudRunV2ServiceTemplateVolumesSecret)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance getCloudSqlInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#cloud_sql_instance GoogleCloudRunV2Service#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.emptyDir"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir getEmptyDir();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#empty_dir GoogleCloudRunV2Service#empty_dir}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.secret"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecret getSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

### GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance;

GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.builder()
//  .instances(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#instances GoogleCloudRunV2Service#instances}

---

### GoogleCloudRunV2ServiceTemplateVolumesEmptyDir <a name="GoogleCloudRunV2ServiceTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir;

GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.builder()
//  .medium(java.lang.String)
//  .sizeLimit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.medium">medium</a></code> | <code>java.lang.String</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#medium GoogleCloudRunV2Service#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#size_limit GoogleCloudRunV2Service#size_limit}

---

### GoogleCloudRunV2ServiceTemplateVolumesSecret <a name="GoogleCloudRunV2ServiceTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesSecret;

GoogleCloudRunV2ServiceTemplateVolumesSecret.builder()
    .secret(java.lang.String)
//  .defaultMode(java.lang.Number)
//  .items(IResolvable)
//  .items(java.util.List<GoogleCloudRunV2ServiceTemplateVolumesSecretItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>></code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#default_mode GoogleCloudRunV2Service#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#items GoogleCloudRunV2Service#items}

---

### GoogleCloudRunV2ServiceTemplateVolumesSecretItems <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems;

GoogleCloudRunV2ServiceTemplateVolumesSecretItems.builder()
    .mode(java.lang.Number)
    .path(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>java.lang.Number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.path">path</a></code> | <code>java.lang.String</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#mode GoogleCloudRunV2Service#mode}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#version GoogleCloudRunV2Service#version}

---

### GoogleCloudRunV2ServiceTemplateVpcAccess <a name="GoogleCloudRunV2ServiceTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVpcAccess;

GoogleCloudRunV2ServiceTemplateVpcAccess.builder()
//  .connector(java.lang.String)
//  .egress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.connector">connector</a></code> | <code>java.lang.String</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.egress">egress</a></code> | <code>java.lang.String</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#connector GoogleCloudRunV2Service#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.egress"></a>

```java
public java.lang.String getEgress();
```

- *Type:* java.lang.String

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#egress GoogleCloudRunV2Service#egress}

---

### GoogleCloudRunV2ServiceTerminalCondition <a name="GoogleCloudRunV2ServiceTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTerminalCondition;

GoogleCloudRunV2ServiceTerminalCondition.builder()
    .build();
```


### GoogleCloudRunV2ServiceTimeouts <a name="GoogleCloudRunV2ServiceTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTimeouts;

GoogleCloudRunV2ServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#create GoogleCloudRunV2Service#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#delete GoogleCloudRunV2Service#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#update GoogleCloudRunV2Service#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#create GoogleCloudRunV2Service#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#delete GoogleCloudRunV2Service#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#update GoogleCloudRunV2Service#update}.

---

### GoogleCloudRunV2ServiceTraffic <a name="GoogleCloudRunV2ServiceTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTraffic;

GoogleCloudRunV2ServiceTraffic.builder()
//  .percent(java.lang.Number)
//  .revision(java.lang.String)
//  .tag(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.revision">revision</a></code> | <code>java.lang.String</code> | Revision to which to send this portion of traffic, if traffic allocation is by revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.tag">tag</a></code> | <code>java.lang.String</code> | Indicates a string to be part of the URI to exclusively reference this target. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.type">type</a></code> | <code>java.lang.String</code> | The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]. |

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#percent GoogleCloudRunV2Service#percent}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Revision to which to send this portion of traffic, if traffic allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#revision GoogleCloudRunV2Service#revision}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Indicates a string to be part of the URI to exclusively reference this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#tag GoogleCloudRunV2Service#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_cloud_run_v2_service#type GoogleCloudRunV2Service#type}

---

### GoogleCloudRunV2ServiceTrafficStatuses <a name="GoogleCloudRunV2ServiceTrafficStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTrafficStatuses;

GoogleCloudRunV2ServiceTrafficStatuses.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference;

new GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification">resetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault">resetUseDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakglassJustification` <a name="resetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```java
public void resetBreakglassJustification()
```

##### `resetUseDefault` <a name="resetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault"></a>

```java
public void resetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglassJustificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput">useDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `breakglassJustificationInput`<sup>Optional</sup> <a name="breakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```java
public java.lang.String getBreakglassJustificationInput();
```

- *Type:* java.lang.String

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```java
public java.lang.Object getUseDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```java
public java.lang.String getBreakglassJustification();
```

- *Type:* java.lang.String

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault"></a>

```java
public java.lang.Object getUseDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceBinaryAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---


### GoogleCloudRunV2ServiceConditionsList <a name="GoogleCloudRunV2ServiceConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceConditionsList;

new GoogleCloudRunV2ServiceConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get"></a>

```java
public GoogleCloudRunV2ServiceConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2ServiceConditionsOutputReference <a name="GoogleCloudRunV2ServiceConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceConditionsOutputReference;

new GoogleCloudRunV2ServiceConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions">GoogleCloudRunV2ServiceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions">GoogleCloudRunV2ServiceConditions</a>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvList <a name="GoogleCloudRunV2ServiceTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvList;

new GoogleCloudRunV2ServiceTemplateContainersEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource"></a>

```java
public void putValueSource(GoogleCloudRunV2ServiceTemplateContainersEnvValueSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource"></a>

```java
public void resetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference getValueSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource getValueSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```java
public void putSecretKeyRef(GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```java
public void resetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference getSecretKeyRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef getSecretKeyRefInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2ServiceTemplateContainersList <a name="GoogleCloudRunV2ServiceTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersList;

new GoogleCloudRunV2ServiceTemplateContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```java
public void putHttpHeaders(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>>

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public java.lang.Object getHttpHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc"></a>

```java
public void putGrpc(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```java
public void putTcpSocket(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc"></a>

```java
public void resetGrpc()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```java
public void resetTcpSocket()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference getTcpSocket();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc getGrpcInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet getHttpGetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket getTcpSocketInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---


### GoogleCloudRunV2ServiceTemplateContainersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainersEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>>

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe"></a>

```java
public void putLivenessProbe(GoogleCloudRunV2ServiceTemplateContainersLivenessProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainersPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources"></a>

```java
public void putResources(GoogleCloudRunV2ServiceTemplateContainersResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe"></a>

```java
public void putStartupProbe(GoogleCloudRunV2ServiceTemplateContainersStartupProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts"></a>

```java
public void putVolumeMounts(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainersVolumeMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe"></a>

```java
public void resetLivenessProbe()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe"></a>

```java
public void resetStartupProbe()
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts"></a>

```java
public void resetVolumeMounts()
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir"></a>

```java
public void resetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList">GoogleCloudRunV2ServiceTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList">GoogleCloudRunV2ServiceTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference">GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList">GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.envInput">envInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.portsInput">portsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.env"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList">GoogleCloudRunV2ServiceTemplateContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.ports"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList">GoogleCloudRunV2ServiceTemplateContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resources"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference">GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference getStartupProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList">GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.envInput"></a>

```java
public java.lang.Object getEnvInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv">GoogleCloudRunV2ServiceTemplateContainersEnv</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe getLivenessProbeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.portsInput"></a>

```java
public java.lang.Object getPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersResources getResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe getStartupProbeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput"></a>

```java
public java.lang.Object getVolumeMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>>

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput"></a>

```java
public java.lang.String getWorkingDirInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>

---


### GoogleCloudRunV2ServiceTemplateContainersPortsList <a name="GoogleCloudRunV2ServiceTemplateContainersPortsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersPortsList;

new GoogleCloudRunV2ServiceTemplateContainersPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts">GoogleCloudRunV2ServiceTemplateContainersPorts</a>

---


### GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle">resetCpuIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost">resetStartupCpuBoost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuIdle` <a name="resetCpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle"></a>

```java
public void resetCpuIdle()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetStartupCpuBoost` <a name="resetStartupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost"></a>

```java
public void resetStartupCpuBoost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput">cpuIdleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput">startupCpuBoostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle">cpuIdle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost">startupCpuBoost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuIdleInput`<sup>Optional</sup> <a name="cpuIdleInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput"></a>

```java
public java.lang.Object getCpuIdleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimitsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startupCpuBoostInput`<sup>Optional</sup> <a name="startupCpuBoostInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput"></a>

```java
public java.lang.Object getStartupCpuBoostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuIdle`<sup>Required</sup> <a name="cpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle"></a>

```java
public java.lang.Object getCpuIdle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startupCpuBoost`<sup>Required</sup> <a name="startupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost"></a>

```java
public java.lang.Object getStartupCpuBoost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```java
public void putHttpHeaders(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>>

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public java.lang.Object getHttpHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc"></a>

```java
public void putGrpc(GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```java
public void putTcpSocket(GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc"></a>

```java
public void resetGrpc()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```java
public void resetTcpSocket()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference getTcpSocket();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc getGrpcInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet getHttpGetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket getTcpSocketInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList;

new GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>>

---


### GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference;

new GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts">GoogleCloudRunV2ServiceTemplateContainersVolumeMounts</a>

---


### GoogleCloudRunV2ServiceTemplateOutputReference <a name="GoogleCloudRunV2ServiceTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateOutputReference;

new GoogleCloudRunV2ServiceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling">putScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment">resetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency">resetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetScaling">resetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers"></a>

```java
public void putContainers(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateContainers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>>

---

##### `putScaling` <a name="putScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling"></a>

```java
public void putScaling(GoogleCloudRunV2ServiceTemplateScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>>

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess"></a>

```java
public void putVpcAccess(GoogleCloudRunV2ServiceTemplateVpcAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetContainers"></a>

```java
public void resetContainers()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetExecutionEnvironment` <a name="resetExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment"></a>

```java
public void resetExecutionEnvironment()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxInstanceRequestConcurrency` <a name="resetMaxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency"></a>

```java
public void resetMaxInstanceRequestConcurrency()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetScaling` <a name="resetScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetScaling"></a>

```java
public void resetScaling()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVpcAccess"></a>

```java
public void resetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList">GoogleCloudRunV2ServiceTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference">GoogleCloudRunV2ServiceTemplateScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList">GoogleCloudRunV2ServiceTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference">GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containersInput">containersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput">executionEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput">maxInstanceRequestConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scalingInput">scalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironment">executionEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containers"></a>

```java
public GoogleCloudRunV2ServiceTemplateContainersList getContainers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList">GoogleCloudRunV2ServiceTemplateContainersList</a>

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scaling"></a>

```java
public GoogleCloudRunV2ServiceTemplateScalingOutputReference getScaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference">GoogleCloudRunV2ServiceTemplateScalingOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumes"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList">GoogleCloudRunV2ServiceTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccess"></a>

```java
public GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference">GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containersInput"></a>

```java
public java.lang.Object getContainersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers">GoogleCloudRunV2ServiceTemplateContainers</a>>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `executionEnvironmentInput`<sup>Optional</sup> <a name="executionEnvironmentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput"></a>

```java
public java.lang.String getExecutionEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="maxInstanceRequestConcurrencyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `scalingInput`<sup>Optional</sup> <a name="scalingInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scalingInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateScaling getScalingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput"></a>

```java
public java.lang.Object getSessionAffinityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>>

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateVpcAccess getVpcAccessInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `executionEnvironment`<sup>Required</sup> <a name="executionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironment"></a>

```java
public java.lang.String getExecutionEnvironment();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstanceRequestConcurrency`<sup>Required</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrency();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinity"></a>

```java
public java.lang.Object getSessionAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---


### GoogleCloudRunV2ServiceTemplateScalingOutputReference <a name="GoogleCloudRunV2ServiceTemplateScalingOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateScalingOutputReference;

new GoogleCloudRunV2ServiceTemplateScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount"></a>

```java
public void resetMaxInstanceCount()
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount"></a>

```java
public void resetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference;

new GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```java
public void resetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference;

new GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```java
public void resetMedium()
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```java
public void resetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```java
public java.lang.String getMediumInput();
```

- *Type:* java.lang.String

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```java
public java.lang.String getSizeLimitInput();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesList <a name="GoogleCloudRunV2ServiceTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesList;

new GoogleCloudRunV2ServiceTemplateVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>>

---


### GoogleCloudRunV2ServiceTemplateVolumesOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference;

new GoogleCloudRunV2ServiceTemplateVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```java
public void putCloudSqlInstance(GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir"></a>

```java
public void putEmptyDir(GoogleCloudRunV2ServiceTemplateVolumesEmptyDir value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret"></a>

```java
public void putSecret(GoogleCloudRunV2ServiceTemplateVolumesSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```java
public void resetCloudSqlInstance()
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetEmptyDir"></a>

```java
public void resetEmptyDir()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference">GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference getCloudSqlInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDir"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference getEmptyDir();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secret"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference getSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference">GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance getCloudSqlInstanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDirInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir getEmptyDirInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecret getSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes">GoogleCloudRunV2ServiceTemplateVolumes</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList;

new GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>>

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference;

new GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference;

new GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<GoogleCloudRunV2ServiceTemplateVolumesSecretItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>>

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```java
public void resetDefaultMode()
```

##### `resetItems` <a name="resetItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList">GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList getItems();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList">GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```java
public java.lang.Number getDefaultModeInput();
```

- *Type:* java.lang.Number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems">GoogleCloudRunV2ServiceTemplateVolumesSecretItems</a>>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateVolumesSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---


### GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference;

new GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress">resetEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnector` <a name="resetConnector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector"></a>

```java
public void resetConnector()
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress"></a>

```java
public void resetEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput">connectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput">egressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput"></a>

```java
public java.lang.String getConnectorInput();
```

- *Type:* java.lang.String

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput"></a>

```java
public java.lang.String getEgressInput();
```

- *Type:* java.lang.String

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress"></a>

```java
public java.lang.String getEgress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTemplateVpcAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---


### GoogleCloudRunV2ServiceTerminalConditionList <a name="GoogleCloudRunV2ServiceTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTerminalConditionList;

new GoogleCloudRunV2ServiceTerminalConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get"></a>

```java
public GoogleCloudRunV2ServiceTerminalConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2ServiceTerminalConditionOutputReference <a name="GoogleCloudRunV2ServiceTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTerminalConditionOutputReference;

new GoogleCloudRunV2ServiceTerminalConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition">GoogleCloudRunV2ServiceTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTerminalCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition">GoogleCloudRunV2ServiceTerminalCondition</a>

---


### GoogleCloudRunV2ServiceTimeoutsOutputReference <a name="GoogleCloudRunV2ServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTimeoutsOutputReference;

new GoogleCloudRunV2ServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

---


### GoogleCloudRunV2ServiceTrafficList <a name="GoogleCloudRunV2ServiceTrafficList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTrafficList;

new GoogleCloudRunV2ServiceTrafficList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get"></a>

```java
public GoogleCloudRunV2ServiceTrafficOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>>

---


### GoogleCloudRunV2ServiceTrafficOutputReference <a name="GoogleCloudRunV2ServiceTrafficOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTrafficOutputReference;

new GoogleCloudRunV2ServiceTrafficOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetPercent">resetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetPercent"></a>

```java
public void resetPercent()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetTag"></a>

```java
public void resetTag()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic">GoogleCloudRunV2ServiceTraffic</a>

---


### GoogleCloudRunV2ServiceTrafficStatusesList <a name="GoogleCloudRunV2ServiceTrafficStatusesList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTrafficStatusesList;

new GoogleCloudRunV2ServiceTrafficStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get"></a>

```java
public GoogleCloudRunV2ServiceTrafficStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2ServiceTrafficStatusesOutputReference <a name="GoogleCloudRunV2ServiceTrafficStatusesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_cloud_run_v2_service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference;

new GoogleCloudRunV2ServiceTrafficStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses">GoogleCloudRunV2ServiceTrafficStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2ServiceTrafficStatuses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses">GoogleCloudRunV2ServiceTrafficStatuses</a>

---



