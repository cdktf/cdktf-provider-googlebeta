# `googleVertexAiIndexEndpointDeployedIndex` Submodule <a name="`googleVertexAiIndexEndpointDeployedIndex` Submodule" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndexEndpointDeployedIndex <a name="GoogleVertexAiIndexEndpointDeployedIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndex;

GoogleVertexAiIndexEndpointDeployedIndex.Builder.create(Construct scope, java.lang.String id)
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
    .deployedIndexId(java.lang.String)
    .index(java.lang.String)
    .indexEndpoint(java.lang.String)
//  .automaticResources(GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources)
//  .dedicatedResources(GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources)
//  .deployedIndexAuthConfig(GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig)
//  .deploymentGroup(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAccessLogging(java.lang.Boolean)
//  .enableAccessLogging(IResolvable)
//  .id(java.lang.String)
//  .reservedIpRanges(java.util.List<java.lang.String>)
//  .timeouts(GoogleVertexAiIndexEndpointDeployedIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.index">index</a></code> | <code>java.lang.String</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexId"></a>

- *Type:* java.lang.String

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_id GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.index"></a>

- *Type:* java.lang.String

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index GoogleVertexAiIndexEndpointDeployedIndex#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.indexEndpoint"></a>

- *Type:* java.lang.String

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index_endpoint GoogleVertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `automaticResources`<sup>Optional</sup> <a name="automaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.automaticResources"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#automatic_resources GoogleVertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.dedicatedResources"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#dedicated_resources GoogleVertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `deployedIndexAuthConfig`<sup>Optional</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexAuthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `deploymentGroup`<sup>Optional</sup> <a name="deploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.deploymentGroup"></a>

- *Type:* java.lang.String

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployment_group GoogleVertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#display_name GoogleVertexAiIndexEndpointDeployedIndex#display_name}

---

##### `enableAccessLogging`<sup>Optional</sup> <a name="enableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.enableAccessLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#enable_access_logging GoogleVertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.reservedIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges GoogleVertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#timeouts GoogleVertexAiIndexEndpointDeployedIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources">putAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources">putDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig">putDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetAutomaticResources">resetAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDedicatedResources">resetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig">resetDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeploymentGroup">resetDeploymentGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging">resetEnableAccessLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomaticResources` <a name="putAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources"></a>

```java
public void putAutomaticResources(GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `putDedicatedResources` <a name="putDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources"></a>

```java
public void putDedicatedResources(GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `putDeployedIndexAuthConfig` <a name="putDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig"></a>

```java
public void putDeployedIndexAuthConfig(GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiIndexEndpointDeployedIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `resetAutomaticResources` <a name="resetAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetAutomaticResources"></a>

```java
public void resetAutomaticResources()
```

##### `resetDedicatedResources` <a name="resetDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDedicatedResources"></a>

```java
public void resetDedicatedResources()
```

##### `resetDeployedIndexAuthConfig` <a name="resetDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig"></a>

```java
public void resetDeployedIndexAuthConfig()
```

##### `resetDeploymentGroup` <a name="resetDeploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeploymentGroup"></a>

```java
public void resetDeploymentGroup()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableAccessLogging` <a name="resetEnableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging"></a>

```java
public void resetEnableAccessLogging()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetId"></a>

```java
public void resetId()
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetReservedIpRanges"></a>

```java
public void resetReservedIpRanges()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndex;

GoogleVertexAiIndexEndpointDeployedIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndex;

GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndex;

GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndex;

GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiIndexEndpointDeployedIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiIndexEndpointDeployedIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndexEndpointDeployedIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexSyncTime">indexSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput">automaticResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput">dedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput">deployedIndexAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput">deployedIndexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput">deploymentGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput">enableAccessLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpointInput">indexEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automaticResources`<sup>Required</sup> <a name="automaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResources"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference getAutomaticResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResources"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a>

---

##### `deployedIndexAuthConfig`<sup>Required</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference getDeployedIndexAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a>

---

##### `indexSyncTime`<sup>Required</sup> <a name="indexSyncTime" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexSyncTime"></a>

```java
public java.lang.String getIndexSyncTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateEndpoints`<sup>Required</sup> <a name="privateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.privateEndpoints"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList getPrivateEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeouts"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a>

---

##### `automaticResourcesInput`<sup>Optional</sup> <a name="automaticResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources getAutomaticResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `dedicatedResourcesInput`<sup>Optional</sup> <a name="dedicatedResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources getDedicatedResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `deployedIndexAuthConfigInput`<sup>Optional</sup> <a name="deployedIndexAuthConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getDeployedIndexAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `deployedIndexIdInput`<sup>Optional</sup> <a name="deployedIndexIdInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput"></a>

```java
public java.lang.String getDeployedIndexIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentGroupInput`<sup>Optional</sup> <a name="deploymentGroupInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput"></a>

```java
public java.lang.String getDeploymentGroupInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableAccessLoggingInput`<sup>Optional</sup> <a name="enableAccessLoggingInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput"></a>

```java
public java.lang.Object getEnableAccessLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpointInput"></a>

```java
public java.lang.String getIndexEndpointInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getReservedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

---

##### `deploymentGroup`<sup>Required</sup> <a name="deploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroup"></a>

```java
public java.lang.String getDeploymentGroup();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableAccessLogging`<sup>Required</sup> <a name="enableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLogging"></a>

```java
public java.lang.Object getEnableAccessLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources <a name="GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources;

GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.builder()
//  .maxReplicaCount(java.lang.Number)
//  .minReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of replicas this DeployedModel will be always deployed on. |

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount. The max allowed replica count is 1000.

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#max_replica_count GoogleVertexAiIndexEndpointDeployedIndex#max_replica_count}

---

##### `minReplicaCount`<sup>Optional</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of replicas this DeployedModel will be always deployed on.

If minReplicaCount is not set, the default value is 2 (we don't provide SLA when minReplicaCount=1).

If traffic against it increases, it may dynamically be deployed onto more replicas up to [maxReplicaCount](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/AutomaticResources#FIELDS.max_replica_count), and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#min_replica_count GoogleVertexAiIndexEndpointDeployedIndex#min_replica_count}

---

### GoogleVertexAiIndexEndpointDeployedIndexConfig <a name="GoogleVertexAiIndexEndpointDeployedIndexConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexConfig;

GoogleVertexAiIndexEndpointDeployedIndexConfig.builder()
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
    .deployedIndexId(java.lang.String)
    .index(java.lang.String)
    .indexEndpoint(java.lang.String)
//  .automaticResources(GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources)
//  .dedicatedResources(GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources)
//  .deployedIndexAuthConfig(GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig)
//  .deploymentGroup(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAccessLogging(java.lang.Boolean)
//  .enableAccessLogging(IResolvable)
//  .id(java.lang.String)
//  .reservedIpRanges(java.util.List<java.lang.String>)
//  .timeouts(GoogleVertexAiIndexEndpointDeployedIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.index">index</a></code> | <code>java.lang.String</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_id GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index GoogleVertexAiIndexEndpointDeployedIndex#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index_endpoint GoogleVertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `automaticResources`<sup>Optional</sup> <a name="automaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.automaticResources"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources getAutomaticResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#automatic_resources GoogleVertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#dedicated_resources GoogleVertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `deployedIndexAuthConfig`<sup>Optional</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getDeployedIndexAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `deploymentGroup`<sup>Optional</sup> <a name="deploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup"></a>

```java
public java.lang.String getDeploymentGroup();
```

- *Type:* java.lang.String

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployment_group GoogleVertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#display_name GoogleVertexAiIndexEndpointDeployedIndex#display_name}

---

##### `enableAccessLogging`<sup>Optional</sup> <a name="enableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging"></a>

```java
public java.lang.Object getEnableAccessLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#enable_access_logging GoogleVertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges GoogleVertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.timeouts"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#timeouts GoogleVertexAiIndexEndpointDeployedIndex#timeouts}

---

### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources;

GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.builder()
    .machineSpec(GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec)
    .minReplicaCount(java.lang.Number)
//  .maxReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#machine_spec GoogleVertexAiIndexEndpointDeployedIndex#machine_spec}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#min_replica_count GoogleVertexAiIndexEndpointDeployedIndex#min_replica_count}

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#max_replica_count GoogleVertexAiIndexEndpointDeployedIndex#max_replica_count}

---

### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;

GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.builder()
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of the machine. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For [DeployedModel](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.endpoints#DeployedModel) this field is optional, and the default value is n1-standard-2. For [BatchPredictionJob](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.batchPredictionJobs#BatchPredictionJob) or as part of [WorkerPoolSpec](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#WorkerPoolSpec) this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#machine_type GoogleVertexAiIndexEndpointDeployedIndex#machine_type}

---

### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;

GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.builder()
//  .authProvider(GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | auth_provider block. |

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getAuthProvider();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#auth_provider GoogleVertexAiIndexEndpointDeployedIndex#auth_provider}

---

### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;

GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.builder()
//  .allowedIssuers(java.util.List<java.lang.String>)
//  .audiences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers">allowedIssuers</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed JWT issuers. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | The list of JWT audiences. |

---

##### `allowedIssuers`<sup>Optional</sup> <a name="allowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuers();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed JWT issuers.

Each entry must be a valid Google service account, in the following format: service-account-name@project-id.iam.gserviceaccount.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#allowed_issuers GoogleVertexAiIndexEndpointDeployedIndex#allowed_issuers}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

The list of JWT audiences.

that are allowed to access. A JWT containing any of these audiences will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#audiences GoogleVertexAiIndexEndpointDeployedIndex#audiences}

---

### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints;

GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints.builder()
    .build();
```


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints;

GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.builder()
    .build();
```


### GoogleVertexAiIndexEndpointDeployedIndexTimeouts <a name="GoogleVertexAiIndexEndpointDeployedIndexTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexTimeouts;

GoogleVertexAiIndexEndpointDeployedIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#create GoogleVertexAiIndexEndpointDeployedIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#delete GoogleVertexAiIndexEndpointDeployedIndex#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#update GoogleVertexAiIndexEndpointDeployedIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#create GoogleVertexAiIndexEndpointDeployedIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#delete GoogleVertexAiIndexEndpointDeployedIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#update GoogleVertexAiIndexEndpointDeployedIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount">resetMinReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```

##### `resetMinReplicaCount` <a name="resetMinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount"></a>

```java
public void resetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers">resetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIssuers` <a name="resetAllowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers"></a>

```java
public void resetAllowedIssuers()
```

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput">allowedIssuersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers">allowedIssuers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIssuersInput`<sup>Optional</sup> <a name="allowedIssuersInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIssuers`<sup>Required</sup> <a name="allowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider">putAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthProvider` <a name="putAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider"></a>

```java
public void putAuthProvider(GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider"></a>

```java
public void resetAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput">authProviderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference getAuthProvider();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getAuthProviderInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList;

new GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress">matchGrpcAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints">pscAutomatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchGrpcAddress`<sup>Required</sup> <a name="matchGrpcAddress" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress"></a>

```java
public java.lang.String getMatchGrpcAddress();
```

- *Type:* java.lang.String

---

##### `pscAutomatedEndpoints`<sup>Required</sup> <a name="pscAutomatedEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList getPscAutomatedEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList;

new GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress">matchAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchAddress`<sup>Required</sup> <a name="matchAddress" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress"></a>

```java
public java.lang.String getMatchAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index_endpoint_deployed_index.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference;

new GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

---



