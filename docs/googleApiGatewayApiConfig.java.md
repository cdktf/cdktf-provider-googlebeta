# `googleApiGatewayApiConfig` Submodule <a name="`googleApiGatewayApiConfig` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigA <a name="GoogleApiGatewayApiConfigA" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigA;

GoogleApiGatewayApiConfigA.Builder.create(Construct scope, java.lang.String id)
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
    .api(java.lang.String)
//  .apiConfigId(java.lang.String)
//  .apiConfigIdPrefix(java.lang.String)
//  .displayName(java.lang.String)
//  .gatewayConfig(GoogleApiGatewayApiConfigGatewayConfig)
//  .grpcServices(IResolvable)
//  .grpcServices(java.util.List<GoogleApiGatewayApiConfigGrpcServices>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .managedServiceConfigs(IResolvable)
//  .managedServiceConfigs(java.util.List<GoogleApiGatewayApiConfigManagedServiceConfigs>)
//  .openapiDocuments(IResolvable)
//  .openapiDocuments(java.util.List<GoogleApiGatewayApiConfigOpenapiDocuments>)
//  .project(java.lang.String)
//  .timeouts(GoogleApiGatewayApiConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigId">apiConfigId</a></code> | <code>java.lang.String</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigIdPrefix">apiConfigIdPrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.grpcServices">grpcServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>></code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.managedServiceConfigs">managedServiceConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>></code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.openapiDocuments">openapiDocuments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>></code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.api"></a>

- *Type:* java.lang.String

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `apiConfigId`<sup>Optional</sup> <a name="apiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigId"></a>

- *Type:* java.lang.String

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `apiConfigIdPrefix`<sup>Optional</sup> <a name="apiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigIdPrefix"></a>

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `gatewayConfig`<sup>Optional</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.gatewayConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `grpcServices`<sup>Optional</sup> <a name="grpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.grpcServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>>

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `managedServiceConfigs`<sup>Optional</sup> <a name="managedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.managedServiceConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>>

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `openapiDocuments`<sup>Optional</sup> <a name="openapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.openapiDocuments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>>

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig">putGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices">putGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs">putManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments">putOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId">resetApiConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix">resetApiConfigIdPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig">resetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices">resetGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs">resetManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments">resetOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGatewayConfig` <a name="putGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig"></a>

```java
public void putGatewayConfig(GoogleApiGatewayApiConfigGatewayConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `putGrpcServices` <a name="putGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices"></a>

```java
public void putGrpcServices(IResolvable OR java.util.List<GoogleApiGatewayApiConfigGrpcServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>>

---

##### `putManagedServiceConfigs` <a name="putManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs"></a>

```java
public void putManagedServiceConfigs(IResolvable OR java.util.List<GoogleApiGatewayApiConfigManagedServiceConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>>

---

##### `putOpenapiDocuments` <a name="putOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments"></a>

```java
public void putOpenapiDocuments(IResolvable OR java.util.List<GoogleApiGatewayApiConfigOpenapiDocuments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts"></a>

```java
public void putTimeouts(GoogleApiGatewayApiConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

---

##### `resetApiConfigId` <a name="resetApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId"></a>

```java
public void resetApiConfigId()
```

##### `resetApiConfigIdPrefix` <a name="resetApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix"></a>

```java
public void resetApiConfigIdPrefix()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGatewayConfig` <a name="resetGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig"></a>

```java
public void resetGatewayConfig()
```

##### `resetGrpcServices` <a name="resetGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices"></a>

```java
public void resetGrpcServices()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetManagedServiceConfigs` <a name="resetManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs"></a>

```java
public void resetManagedServiceConfigs()
```

##### `resetOpenapiDocuments` <a name="resetOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments"></a>

```java
public void resetOpenapiDocuments()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigA;

GoogleApiGatewayApiConfigA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigA;

GoogleApiGatewayApiConfigA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigA;

GoogleApiGatewayApiConfigA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigA;

GoogleApiGatewayApiConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApiGatewayApiConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApiGatewayApiConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApiGatewayApiConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayApiConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices">grpcServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs">managedServiceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments">openapiDocuments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId">serviceConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput">apiConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput">apiConfigIdPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput">gatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput">grpcServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput">managedServiceConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput">openapiDocumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId">apiConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix">apiConfigIdPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gatewayConfig`<sup>Required</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfigOutputReference getGatewayConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a>

---

##### `grpcServices`<sup>Required</sup> <a name="grpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesList getGrpcServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a>

---

##### `managedServiceConfigs`<sup>Required</sup> <a name="managedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs"></a>

```java
public GoogleApiGatewayApiConfigManagedServiceConfigsList getManagedServiceConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openapiDocuments`<sup>Required</sup> <a name="openapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsList getOpenapiDocuments();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a>

---

##### `serviceConfigId`<sup>Required</sup> <a name="serviceConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId"></a>

```java
public java.lang.String getServiceConfigId();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts"></a>

```java
public GoogleApiGatewayApiConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a>

---

##### `apiConfigIdInput`<sup>Optional</sup> <a name="apiConfigIdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput"></a>

```java
public java.lang.String getApiConfigIdInput();
```

- *Type:* java.lang.String

---

##### `apiConfigIdPrefixInput`<sup>Optional</sup> <a name="apiConfigIdPrefixInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput"></a>

```java
public java.lang.String getApiConfigIdPrefixInput();
```

- *Type:* java.lang.String

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayConfigInput`<sup>Optional</sup> <a name="gatewayConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfig getGatewayConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `grpcServicesInput`<sup>Optional</sup> <a name="grpcServicesInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput"></a>

```java
public java.lang.Object getGrpcServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `managedServiceConfigsInput`<sup>Optional</sup> <a name="managedServiceConfigsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput"></a>

```java
public java.lang.Object getManagedServiceConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>>

---

##### `openapiDocumentsInput`<sup>Optional</sup> <a name="openapiDocumentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput"></a>

```java
public java.lang.Object getOpenapiDocumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `apiConfigId`<sup>Required</sup> <a name="apiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId"></a>

```java
public java.lang.String getApiConfigId();
```

- *Type:* java.lang.String

---

##### `apiConfigIdPrefix`<sup>Required</sup> <a name="apiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix"></a>

```java
public java.lang.String getApiConfigIdPrefix();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigAConfig <a name="GoogleApiGatewayApiConfigAConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigAConfig;

GoogleApiGatewayApiConfigAConfig.builder()
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
    .api(java.lang.String)
//  .apiConfigId(java.lang.String)
//  .apiConfigIdPrefix(java.lang.String)
//  .displayName(java.lang.String)
//  .gatewayConfig(GoogleApiGatewayApiConfigGatewayConfig)
//  .grpcServices(IResolvable)
//  .grpcServices(java.util.List<GoogleApiGatewayApiConfigGrpcServices>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .managedServiceConfigs(IResolvable)
//  .managedServiceConfigs(java.util.List<GoogleApiGatewayApiConfigManagedServiceConfigs>)
//  .openapiDocuments(IResolvable)
//  .openapiDocuments(java.util.List<GoogleApiGatewayApiConfigOpenapiDocuments>)
//  .project(java.lang.String)
//  .timeouts(GoogleApiGatewayApiConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api">api</a></code> | <code>java.lang.String</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId">apiConfigId</a></code> | <code>java.lang.String</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix">apiConfigIdPrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices">grpcServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>></code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs">managedServiceConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>></code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments">openapiDocuments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>></code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `apiConfigId`<sup>Optional</sup> <a name="apiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId"></a>

```java
public java.lang.String getApiConfigId();
```

- *Type:* java.lang.String

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `apiConfigIdPrefix`<sup>Optional</sup> <a name="apiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix"></a>

```java
public java.lang.String getApiConfigIdPrefix();
```

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `gatewayConfig`<sup>Optional</sup> <a name="gatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfig getGatewayConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `grpcServices`<sup>Optional</sup> <a name="grpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices"></a>

```java
public java.lang.Object getGrpcServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>>

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `managedServiceConfigs`<sup>Optional</sup> <a name="managedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs"></a>

```java
public java.lang.Object getManagedServiceConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>>

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `openapiDocuments`<sup>Optional</sup> <a name="openapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments"></a>

```java
public java.lang.Object getOpenapiDocuments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>>

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts"></a>

```java
public GoogleApiGatewayApiConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

### GoogleApiGatewayApiConfigGatewayConfig <a name="GoogleApiGatewayApiConfigGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGatewayConfig;

GoogleApiGatewayApiConfigGatewayConfig.builder()
    .backendConfig(GoogleApiGatewayApiConfigGatewayConfigBackendConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | backend_config block. |

---

##### `backendConfig`<sup>Required</sup> <a name="backendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}

---

### GoogleApiGatewayApiConfigGatewayConfigBackendConfig <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGatewayConfigBackendConfig;

GoogleApiGatewayApiConfigGatewayConfigBackendConfig.builder()
    .googleServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). |

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}

---

### GoogleApiGatewayApiConfigGrpcServices <a name="GoogleApiGatewayApiConfigGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServices;

GoogleApiGatewayApiConfigGrpcServices.builder()
    .fileDescriptorSet(GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet)
//  .source(IResolvable)
//  .source(java.util.List<GoogleApiGatewayApiConfigGrpcServicesSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet">fileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | file_descriptor_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>></code> | source block. |

---

##### `fileDescriptorSet`<sup>Required</sup> <a name="fileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet getFileDescriptorSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

file_descriptor_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}

---

### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet;

GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.builder()
    .contents(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents">contents</a></code> | <code>java.lang.String</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path">path</a></code> | <code>java.lang.String</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigGrpcServicesSource <a name="GoogleApiGatewayApiConfigGrpcServicesSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesSource;

GoogleApiGatewayApiConfigGrpcServicesSource.builder()
    .contents(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents">contents</a></code> | <code>java.lang.String</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path">path</a></code> | <code>java.lang.String</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigManagedServiceConfigs <a name="GoogleApiGatewayApiConfigManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigManagedServiceConfigs;

GoogleApiGatewayApiConfigManagedServiceConfigs.builder()
    .contents(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents">contents</a></code> | <code>java.lang.String</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path">path</a></code> | <code>java.lang.String</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigOpenapiDocuments <a name="GoogleApiGatewayApiConfigOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigOpenapiDocuments;

GoogleApiGatewayApiConfigOpenapiDocuments.builder()
    .document(GoogleApiGatewayApiConfigOpenapiDocumentsDocument)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document">document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | document block. |

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument getDocument();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}

---

### GoogleApiGatewayApiConfigOpenapiDocumentsDocument <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigOpenapiDocumentsDocument;

GoogleApiGatewayApiConfigOpenapiDocumentsDocument.builder()
    .contents(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents">contents</a></code> | <code>java.lang.String</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path">path</a></code> | <code>java.lang.String</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigTimeouts <a name="GoogleApiGatewayApiConfigTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigTimeouts;

GoogleApiGatewayApiConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference;

new GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


### GoogleApiGatewayApiConfigGatewayConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGatewayConfigOutputReference;

new GoogleApiGatewayApiConfigGatewayConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig">putBackendConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendConfig` <a name="putBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig"></a>

```java
public void putBackendConfig(GoogleApiGatewayApiConfigGatewayConfigBackendConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput">backendConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendConfig`<sup>Required</sup> <a name="backendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a>

---

##### `backendConfigInput`<sup>Optional</sup> <a name="backendConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig getBackendConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue"></a>

```java
public GoogleApiGatewayApiConfigGatewayConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---


### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference;

new GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput"></a>

```java
public java.lang.String getContentsInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---


### GoogleApiGatewayApiConfigGrpcServicesList <a name="GoogleApiGatewayApiConfigGrpcServicesList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesList;

new GoogleApiGatewayApiConfigGrpcServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>>

---


### GoogleApiGatewayApiConfigGrpcServicesOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesOutputReference;

new GoogleApiGatewayApiConfigGrpcServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet">putFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileDescriptorSet` <a name="putFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet"></a>

```java
public void putFileDescriptorSet(GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource"></a>

```java
public void putSource(IResolvable OR java.util.List<GoogleApiGatewayApiConfigGrpcServicesSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>>

---

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet">fileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput">fileDescriptorSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput">sourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileDescriptorSet`<sup>Required</sup> <a name="fileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference getFileDescriptorSet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a>

---

##### `fileDescriptorSetInput`<sup>Optional</sup> <a name="fileDescriptorSetInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet getFileDescriptorSetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>

---


### GoogleApiGatewayApiConfigGrpcServicesSourceList <a name="GoogleApiGatewayApiConfigGrpcServicesSourceList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesSourceList;

new GoogleApiGatewayApiConfigGrpcServicesSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get"></a>

```java
public GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>>

---


### GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference;

new GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput"></a>

```java
public java.lang.String getContentsInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>

---


### GoogleApiGatewayApiConfigManagedServiceConfigsList <a name="GoogleApiGatewayApiConfigManagedServiceConfigsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigManagedServiceConfigsList;

new GoogleApiGatewayApiConfigManagedServiceConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get"></a>

```java
public GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>>

---


### GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference <a name="GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference;

new GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput"></a>

```java
public java.lang.String getContentsInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference;

new GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput"></a>

```java
public java.lang.String getContentsInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsList <a name="GoogleApiGatewayApiConfigOpenapiDocumentsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigOpenapiDocumentsList;

new GoogleApiGatewayApiConfigOpenapiDocumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference;

new GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument">putDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDocument` <a name="putDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument"></a>

```java
public void putDocument(GoogleApiGatewayApiConfigOpenapiDocumentsDocument value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document">document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput">documentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference getDocument();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a>

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput"></a>

```java
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument getDocumentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>

---


### GoogleApiGatewayApiConfigTimeoutsOutputReference <a name="GoogleApiGatewayApiConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_api_gateway_api_config.GoogleApiGatewayApiConfigTimeoutsOutputReference;

new GoogleApiGatewayApiConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

---



