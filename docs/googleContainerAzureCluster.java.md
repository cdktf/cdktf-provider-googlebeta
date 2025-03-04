# `googleContainerAzureCluster` Submodule <a name="`googleContainerAzureCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureCluster <a name="GoogleContainerAzureCluster" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster google_container_azure_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureCluster;

GoogleContainerAzureCluster.Builder.create(Construct scope, java.lang.String id)
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
    .authorization(GoogleContainerAzureClusterAuthorization)
    .azureRegion(java.lang.String)
    .controlPlane(GoogleContainerAzureClusterControlPlane)
    .fleet(GoogleContainerAzureClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(GoogleContainerAzureClusterNetworking)
    .resourceGroupId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureServicesAuthentication(GoogleContainerAzureClusterAzureServicesAuthentication)
//  .client(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfig(GoogleContainerAzureClusterLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleContainerAzureClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.client">client</a></code> | <code>java.lang.String</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#authorization GoogleContainerAzureCluster#authorization}

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.azureRegion"></a>

- *Type:* java.lang.String

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#azure_region GoogleContainerAzureCluster#azure_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#control_plane GoogleContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#fleet GoogleContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#location GoogleContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#name GoogleContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#networking GoogleContainerAzureCluster#networking}

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.resourceGroupId"></a>

- *Type:* java.lang.String

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#annotations GoogleContainerAzureCluster#annotations}

---

##### `azureServicesAuthentication`<sup>Optional</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.azureServicesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#azure_services_authentication GoogleContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.client"></a>

- *Type:* java.lang.String

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#client GoogleContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#description GoogleContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#logging_config GoogleContainerAzureCluster#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#timeouts GoogleContainerAzureCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication">putAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAzureServicesAuthentication">resetAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization"></a>

```java
public void putAuthorization(GoogleContainerAzureClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---

##### `putAzureServicesAuthentication` <a name="putAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication"></a>

```java
public void putAzureServicesAuthentication(GoogleContainerAzureClusterAzureServicesAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane"></a>

```java
public void putControlPlane(GoogleContainerAzureClusterControlPlane value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet"></a>

```java
public void putFleet(GoogleContainerAzureClusterFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleContainerAzureClusterLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking"></a>

```java
public void putNetworking(GoogleContainerAzureClusterNetworking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleContainerAzureClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAzureServicesAuthentication` <a name="resetAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAzureServicesAuthentication"></a>

```java
public void resetAzureServicesAuthentication()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetClient"></a>

```java
public void resetClient()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAzureCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureCluster;

GoogleContainerAzureCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureCluster;

GoogleContainerAzureCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureCluster;

GoogleContainerAzureCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureCluster;

GoogleContainerAzureCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContainerAzureCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleContainerAzureCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContainerAzureCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContainerAzureCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference">GoogleContainerAzureClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference">GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference">GoogleContainerAzureClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference">GoogleContainerAzureClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference">GoogleContainerAzureClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference">GoogleContainerAzureClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference">GoogleContainerAzureClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList">GoogleContainerAzureClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegionInput">azureRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthenticationInput">azureServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.clientInput">clientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorization"></a>

```java
public GoogleContainerAzureClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference">GoogleContainerAzureClusterAuthorizationOutputReference</a>

---

##### `azureServicesAuthentication`<sup>Required</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthentication"></a>

```java
public GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference getAzureServicesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference">GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlane"></a>

```java
public GoogleContainerAzureClusterControlPlaneOutputReference getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference">GoogleContainerAzureClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleet"></a>

```java
public GoogleContainerAzureClusterFleetOutputReference getFleet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference">GoogleContainerAzureClusterFleetOutputReference</a>

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfig"></a>

```java
public GoogleContainerAzureClusterLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference">GoogleContainerAzureClusterLoggingConfigOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networking"></a>

```java
public GoogleContainerAzureClusterNetworkingOutputReference getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference">GoogleContainerAzureClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeouts"></a>

```java
public GoogleContainerAzureClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference">GoogleContainerAzureClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.workloadIdentityConfig"></a>

```java
public GoogleContainerAzureClusterWorkloadIdentityConfigList getWorkloadIdentityConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList">GoogleContainerAzureClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorizationInput"></a>

```java
public GoogleContainerAzureClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---

##### `azureRegionInput`<sup>Optional</sup> <a name="azureRegionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegionInput"></a>

```java
public java.lang.String getAzureRegionInput();
```

- *Type:* java.lang.String

---

##### `azureServicesAuthenticationInput`<sup>Optional</sup> <a name="azureServicesAuthenticationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthenticationInput"></a>

```java
public GoogleContainerAzureClusterAzureServicesAuthentication getAzureServicesAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.clientInput"></a>

```java
public java.lang.String getClientInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlaneInput"></a>

```java
public GoogleContainerAzureClusterControlPlane getControlPlaneInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleetInput"></a>

```java
public GoogleContainerAzureClusterFleet getFleetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfigInput"></a>

```java
public GoogleContainerAzureClusterLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networkingInput"></a>

```java
public GoogleContainerAzureClusterNetworking getNetworkingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegion"></a>

```java
public java.lang.String getAzureRegion();
```

- *Type:* java.lang.String

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureClusterAuthorization <a name="GoogleContainerAzureClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorization;

GoogleContainerAzureClusterAuthorization.builder()
    .adminUsers(IResolvable)
    .adminUsers(java.util.List<GoogleContainerAzureClusterAuthorizationAdminUsers>)
//  .adminGroups(IResolvable)
//  .adminGroups(java.util.List<GoogleContainerAzureClusterAuthorizationAdminGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>></code> | admin_users block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>></code> | admin_groups block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminUsers"></a>

```java
public java.lang.Object getAdminUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#admin_users GoogleContainerAzureCluster#admin_users}

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminGroups"></a>

```java
public java.lang.Object getAdminGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>>

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#admin_groups GoogleContainerAzureCluster#admin_groups}

---

### GoogleContainerAzureClusterAuthorizationAdminGroups <a name="GoogleContainerAzureClusterAuthorizationAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminGroups;

GoogleContainerAzureClusterAuthorizationAdminGroups.builder()
    .group(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>java.lang.String</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#group GoogleContainerAzureCluster#group}

---

### GoogleContainerAzureClusterAuthorizationAdminUsers <a name="GoogleContainerAzureClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminUsers;

GoogleContainerAzureClusterAuthorizationAdminUsers.builder()
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>java.lang.String</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#username GoogleContainerAzureCluster#username}

---

### GoogleContainerAzureClusterAzureServicesAuthentication <a name="GoogleContainerAzureClusterAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAzureServicesAuthentication;

GoogleContainerAzureClusterAzureServicesAuthentication.builder()
    .applicationId(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The Azure Active Directory Application ID for Authentication configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Azure Active Directory Tenant ID for Authentication configuration. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#application_id GoogleContainerAzureCluster#application_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#tenant_id GoogleContainerAzureCluster#tenant_id}

---

### GoogleContainerAzureClusterConfig <a name="GoogleContainerAzureClusterConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterConfig;

GoogleContainerAzureClusterConfig.builder()
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
    .authorization(GoogleContainerAzureClusterAuthorization)
    .azureRegion(java.lang.String)
    .controlPlane(GoogleContainerAzureClusterControlPlane)
    .fleet(GoogleContainerAzureClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(GoogleContainerAzureClusterNetworking)
    .resourceGroupId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureServicesAuthentication(GoogleContainerAzureClusterAzureServicesAuthentication)
//  .client(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfig(GoogleContainerAzureClusterLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleContainerAzureClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.client">client</a></code> | <code>java.lang.String</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.authorization"></a>

```java
public GoogleContainerAzureClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#authorization GoogleContainerAzureCluster#authorization}

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureRegion"></a>

```java
public java.lang.String getAzureRegion();
```

- *Type:* java.lang.String

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#azure_region GoogleContainerAzureCluster#azure_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.controlPlane"></a>

```java
public GoogleContainerAzureClusterControlPlane getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#control_plane GoogleContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.fleet"></a>

```java
public GoogleContainerAzureClusterFleet getFleet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#fleet GoogleContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#location GoogleContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#name GoogleContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.networking"></a>

```java
public GoogleContainerAzureClusterNetworking getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#networking GoogleContainerAzureCluster#networking}

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#annotations GoogleContainerAzureCluster#annotations}

---

##### `azureServicesAuthentication`<sup>Optional</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureServicesAuthentication"></a>

```java
public GoogleContainerAzureClusterAzureServicesAuthentication getAzureServicesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#azure_services_authentication GoogleContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#client GoogleContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#description GoogleContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.loggingConfig"></a>

```java
public GoogleContainerAzureClusterLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#logging_config GoogleContainerAzureCluster#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.timeouts"></a>

```java
public GoogleContainerAzureClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#timeouts GoogleContainerAzureCluster#timeouts}

---

### GoogleContainerAzureClusterControlPlane <a name="GoogleContainerAzureClusterControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlane;

GoogleContainerAzureClusterControlPlane.builder()
    .sshConfig(GoogleContainerAzureClusterControlPlaneSshConfig)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .databaseEncryption(GoogleContainerAzureClusterControlPlaneDatabaseEncryption)
//  .mainVolume(GoogleContainerAzureClusterControlPlaneMainVolume)
//  .proxyConfig(GoogleContainerAzureClusterControlPlaneProxyConfig)
//  .replicaPlacements(IResolvable)
//  .replicaPlacements(java.util.List<GoogleContainerAzureClusterControlPlaneReplicaPlacements>)
//  .rootVolume(GoogleContainerAzureClusterControlPlaneRootVolume)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vmSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.replicaPlacements">replicaPlacements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | replica_placements block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. A set of tags to apply to all underlying control plane Azure resources. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.sshConfig"></a>

```java
public GoogleContainerAzureClusterControlPlaneSshConfig getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#ssh_config GoogleContainerAzureCluster#ssh_config}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#version GoogleContainerAzureCluster#version}

---

##### `databaseEncryption`<sup>Optional</sup> <a name="databaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.databaseEncryption"></a>

```java
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption getDatabaseEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#database_encryption GoogleContainerAzureCluster#database_encryption}

---

##### `mainVolume`<sup>Optional</sup> <a name="mainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.mainVolume"></a>

```java
public GoogleContainerAzureClusterControlPlaneMainVolume getMainVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#main_volume GoogleContainerAzureCluster#main_volume}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.proxyConfig"></a>

```java
public GoogleContainerAzureClusterControlPlaneProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#proxy_config GoogleContainerAzureCluster#proxy_config}

---

##### `replicaPlacements`<sup>Optional</sup> <a name="replicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.replicaPlacements"></a>

```java
public java.lang.Object getReplicaPlacements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>>

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#replica_placements GoogleContainerAzureCluster#replica_placements}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.rootVolume"></a>

```java
public GoogleContainerAzureClusterControlPlaneRootVolume getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#root_volume GoogleContainerAzureCluster#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#tags GoogleContainerAzureCluster#tags}

---

##### `vmSize`<sup>Optional</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#vm_size GoogleContainerAzureCluster#vm_size}

---

### GoogleContainerAzureClusterControlPlaneDatabaseEncryption <a name="GoogleContainerAzureClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption;

GoogleContainerAzureClusterControlPlaneDatabaseEncryption.builder()
    .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARM ID of the Azure Key Vault key to encrypt / decrypt data. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#key_id GoogleContainerAzureCluster#key_id}

---

### GoogleContainerAzureClusterControlPlaneMainVolume <a name="GoogleContainerAzureClusterControlPlaneMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneMainVolume;

GoogleContainerAzureClusterControlPlaneMainVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}

---

### GoogleContainerAzureClusterControlPlaneProxyConfig <a name="GoogleContainerAzureClusterControlPlaneProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneProxyConfig;

GoogleContainerAzureClusterControlPlaneProxyConfig.builder()
    .resourceGroupId(java.lang.String)
    .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#secret_id GoogleContainerAzureCluster#secret_id}

---

### GoogleContainerAzureClusterControlPlaneReplicaPlacements <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements;

GoogleContainerAzureClusterControlPlaneReplicaPlacements.builder()
    .azureAvailabilityZone(java.lang.String)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | For a given replica, the ARM ID of the subnet where the control plane VM is deployed. |

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#azure_availability_zone GoogleContainerAzureCluster#azure_availability_zone}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

For a given replica, the ARM ID of the subnet where the control plane VM is deployed.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}

---

### GoogleContainerAzureClusterControlPlaneRootVolume <a name="GoogleContainerAzureClusterControlPlaneRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneRootVolume;

GoogleContainerAzureClusterControlPlaneRootVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}

---

### GoogleContainerAzureClusterControlPlaneSshConfig <a name="GoogleContainerAzureClusterControlPlaneSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneSshConfig;

GoogleContainerAzureClusterControlPlaneSshConfig.builder()
    .authorizedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#authorized_key GoogleContainerAzureCluster#authorized_key}

---

### GoogleContainerAzureClusterFleet <a name="GoogleContainerAzureClusterFleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterFleet;

GoogleContainerAzureClusterFleet.builder()
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.property.project">project</a></code> | <code>java.lang.String</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}

---

### GoogleContainerAzureClusterLoggingConfig <a name="GoogleContainerAzureClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterLoggingConfig;

GoogleContainerAzureClusterLoggingConfig.builder()
//  .componentConfig(GoogleContainerAzureClusterLoggingConfigComponentConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `componentConfig`<sup>Optional</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.property.componentConfig"></a>

```java
public GoogleContainerAzureClusterLoggingConfigComponentConfig getComponentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#component_config GoogleContainerAzureCluster#component_config}

---

### GoogleContainerAzureClusterLoggingConfigComponentConfig <a name="GoogleContainerAzureClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterLoggingConfigComponentConfig;

GoogleContainerAzureClusterLoggingConfigComponentConfig.builder()
//  .enableComponents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.property.enableComponents">enableComponents</a></code> | <code>java.util.List<java.lang.String></code> | Components of the logging configuration to be enabled. |

---

##### `enableComponents`<sup>Optional</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```java
public java.util.List<java.lang.String> getEnableComponents();
```

- *Type:* java.util.List<java.lang.String>

Components of the logging configuration to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#enable_components GoogleContainerAzureCluster#enable_components}

---

### GoogleContainerAzureClusterNetworking <a name="GoogleContainerAzureClusterNetworking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterNetworking;

GoogleContainerAzureClusterNetworking.builder()
    .podAddressCidrBlocks(java.util.List<java.lang.String>)
    .serviceAddressCidrBlocks(java.util.List<java.lang.String>)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#pod_address_cidr_blocks GoogleContainerAzureCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#service_address_cidr_blocks GoogleContainerAzureCluster#service_address_cidr_blocks}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#virtual_network_id GoogleContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleContainerAzureClusterTimeouts <a name="GoogleContainerAzureClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterTimeouts;

GoogleContainerAzureClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#create GoogleContainerAzureCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#delete GoogleContainerAzureCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#update GoogleContainerAzureCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#create GoogleContainerAzureCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#delete GoogleContainerAzureCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_cluster#update GoogleContainerAzureCluster#update}.

---

### GoogleContainerAzureClusterWorkloadIdentityConfig <a name="GoogleContainerAzureClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterWorkloadIdentityConfig;

GoogleContainerAzureClusterWorkloadIdentityConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureClusterAuthorizationAdminGroupsList <a name="GoogleContainerAzureClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList;

new GoogleContainerAzureClusterAuthorizationAdminGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get"></a>

```java
public GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>>

---


### GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference <a name="GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference;

new GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>

---


### GoogleContainerAzureClusterAuthorizationAdminUsersList <a name="GoogleContainerAzureClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminUsersList;

new GoogleContainerAzureClusterAuthorizationAdminUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get"></a>

```java
public GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>>

---


### GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference <a name="GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference;

new GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>

---


### GoogleContainerAzureClusterAuthorizationOutputReference <a name="GoogleContainerAzureClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAuthorizationOutputReference;

new GoogleContainerAzureClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups">putAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminGroups` <a name="putAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups"></a>

```java
public void putAdminGroups(IResolvable OR java.util.List<GoogleContainerAzureClusterAuthorizationAdminGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>>

---

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers"></a>

```java
public void putAdminUsers(IResolvable OR java.util.List<GoogleContainerAzureClusterAuthorizationAdminUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>>

---

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resetAdminGroups"></a>

```java
public void resetAdminGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList">GoogleContainerAzureClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList">GoogleContainerAzureClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroups"></a>

```java
public GoogleContainerAzureClusterAuthorizationAdminGroupsList getAdminGroups();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList">GoogleContainerAzureClusterAuthorizationAdminGroupsList</a>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public GoogleContainerAzureClusterAuthorizationAdminUsersList getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList">GoogleContainerAzureClusterAuthorizationAdminUsersList</a>

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```java
public java.lang.Object getAdminGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups">GoogleContainerAzureClusterAuthorizationAdminGroups</a>>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public java.lang.Object getAdminUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers">GoogleContainerAzureClusterAuthorizationAdminUsers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---


### GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference <a name="GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference;

new GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterAzureServicesAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---


### GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference <a name="GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference;

new GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---


### GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference <a name="GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference;

new GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlaneMainVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---


### GoogleContainerAzureClusterControlPlaneOutputReference <a name="GoogleContainerAzureClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneOutputReference;

new GoogleContainerAzureClusterControlPlaneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption">putDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume">putMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements">putReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption">resetDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetMainVolume">resetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements">resetReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetVmSize">resetVmSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseEncryption` <a name="putDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```java
public void putDatabaseEncryption(GoogleContainerAzureClusterControlPlaneDatabaseEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `putMainVolume` <a name="putMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume"></a>

```java
public void putMainVolume(GoogleContainerAzureClusterControlPlaneMainVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig"></a>

```java
public void putProxyConfig(GoogleContainerAzureClusterControlPlaneProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `putReplicaPlacements` <a name="putReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements"></a>

```java
public void putReplicaPlacements(IResolvable OR java.util.List<GoogleContainerAzureClusterControlPlaneReplicaPlacements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume"></a>

```java
public void putRootVolume(GoogleContainerAzureClusterControlPlaneRootVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig"></a>

```java
public void putSshConfig(GoogleContainerAzureClusterControlPlaneSshConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---

##### `resetDatabaseEncryption` <a name="resetDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption"></a>

```java
public void resetDatabaseEncryption()
```

##### `resetMainVolume` <a name="resetMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetMainVolume"></a>

```java
public void resetMainVolume()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetReplicaPlacements` <a name="resetReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements"></a>

```java
public void resetReplicaPlacements()
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmSize` <a name="resetVmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetVmSize"></a>

```java
public void resetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference">GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference">GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements">replicaPlacements</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList">GoogleContainerAzureClusterControlPlaneReplicaPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference">GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference">GoogleContainerAzureClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput">databaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput">mainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput">replicaPlacementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```java
public GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference getDatabaseEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `mainVolume`<sup>Required</sup> <a name="mainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolume"></a>

```java
public GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference getMainVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference">GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfig"></a>

```java
public GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference">GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference</a>

---

##### `replicaPlacements`<sup>Required</sup> <a name="replicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements"></a>

```java
public GoogleContainerAzureClusterControlPlaneReplicaPlacementsList getReplicaPlacements();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList">GoogleContainerAzureClusterControlPlaneReplicaPlacementsList</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolume"></a>

```java
public GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference">GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfig"></a>

```java
public GoogleContainerAzureClusterControlPlaneSshConfigOutputReference getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference">GoogleContainerAzureClusterControlPlaneSshConfigOutputReference</a>

---

##### `databaseEncryptionInput`<sup>Optional</sup> <a name="databaseEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```java
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption getDatabaseEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `mainVolumeInput`<sup>Optional</sup> <a name="mainVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```java
public GoogleContainerAzureClusterControlPlaneMainVolume getMainVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```java
public GoogleContainerAzureClusterControlPlaneProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `replicaPlacementsInput`<sup>Optional</sup> <a name="replicaPlacementsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput"></a>

```java
public java.lang.Object getReplicaPlacementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```java
public GoogleContainerAzureClusterControlPlaneRootVolume getRootVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```java
public GoogleContainerAzureClusterControlPlaneSshConfig getSshConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlane getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---


### GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference <a name="GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference;

new GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlaneProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---


### GoogleContainerAzureClusterControlPlaneReplicaPlacementsList <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacementsList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList;

new GoogleContainerAzureClusterControlPlaneReplicaPlacementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get"></a>

```java
public GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>>

---


### GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference;

new GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput">azureAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureAvailabilityZoneInput`<sup>Optional</sup> <a name="azureAvailabilityZoneInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput"></a>

```java
public java.lang.String getAzureAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements">GoogleContainerAzureClusterControlPlaneReplicaPlacements</a>

---


### GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference <a name="GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference;

new GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlaneRootVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---


### GoogleContainerAzureClusterControlPlaneSshConfigOutputReference <a name="GoogleContainerAzureClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference;

new GoogleContainerAzureClusterControlPlaneSshConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput">authorizedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedKeyInput`<sup>Optional</sup> <a name="authorizedKeyInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput"></a>

```java
public java.lang.String getAuthorizedKeyInput();
```

- *Type:* java.lang.String

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterControlPlaneSshConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---


### GoogleContainerAzureClusterFleetOutputReference <a name="GoogleContainerAzureClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterFleetOutputReference;

new GoogleContainerAzureClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---


### GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference;

new GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">resetEnableComponents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableComponents` <a name="resetEnableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```java
public void resetEnableComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enableComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enableComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableComponentsInput`<sup>Optional</sup> <a name="enableComponentsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```java
public java.util.List<java.lang.String> getEnableComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableComponents`<sup>Required</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```java
public java.util.List<java.lang.String> getEnableComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterLoggingConfigComponentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAzureClusterLoggingConfigOutputReference <a name="GoogleContainerAzureClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterLoggingConfigOutputReference;

new GoogleContainerAzureClusterLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig">putComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resetComponentConfig">resetComponentConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponentConfig` <a name="putComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig"></a>

```java
public void putComponentConfig(GoogleContainerAzureClusterLoggingConfigComponentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---

##### `resetComponentConfig` <a name="resetComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```java
public void resetComponentConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfigInput">componentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentConfig`<sup>Required</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfig"></a>

```java
public GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference getComponentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `componentConfigInput`<sup>Optional</sup> <a name="componentConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```java
public GoogleContainerAzureClusterLoggingConfigComponentConfig getComponentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---


### GoogleContainerAzureClusterNetworkingOutputReference <a name="GoogleContainerAzureClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterNetworkingOutputReference;

new GoogleContainerAzureClusterNetworkingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterNetworking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---


### GoogleContainerAzureClusterTimeoutsOutputReference <a name="GoogleContainerAzureClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterTimeoutsOutputReference;

new GoogleContainerAzureClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

---


### GoogleContainerAzureClusterWorkloadIdentityConfigList <a name="GoogleContainerAzureClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterWorkloadIdentityConfigList;

new GoogleContainerAzureClusterWorkloadIdentityConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get"></a>

```java
public GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_cluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference;

new GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig">GoogleContainerAzureClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```java
public java.lang.String getWorkloadPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureClusterWorkloadIdentityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig">GoogleContainerAzureClusterWorkloadIdentityConfig</a>

---



