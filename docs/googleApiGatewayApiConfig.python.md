# `googleApiGatewayApiConfig` Submodule <a name="`googleApiGatewayApiConfig` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigA <a name="GoogleApiGatewayApiConfigA" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api: str,
  api_config_id: str = None,
  api_config_id_prefix: str = None,
  display_name: str = None,
  gateway_config: GoogleApiGatewayApiConfigGatewayConfig = None,
  grpc_services: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  managed_service_configs: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]] = None,
  openapi_documents: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]] = None,
  project: str = None,
  timeouts: GoogleApiGatewayApiConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.api">api</a></code> | <code>str</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigId">api_config_id</a></code> | <code>str</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigIdPrefix">api_config_id_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.grpcServices">grpc_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]</code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.managedServiceConfigs">managed_service_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]</code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.openapiDocuments">openapi_documents</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]</code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.api"></a>

- *Type:* str

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `api_config_id`<sup>Optional</sup> <a name="api_config_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigId"></a>

- *Type:* str

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `api_config_id_prefix`<sup>Optional</sup> <a name="api_config_id_prefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.apiConfigIdPrefix"></a>

- *Type:* str

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.displayName"></a>

- *Type:* str

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `gateway_config`<sup>Optional</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.gatewayConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `grpc_services`<sup>Optional</sup> <a name="grpc_services" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.grpcServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `managed_service_configs`<sup>Optional</sup> <a name="managed_service_configs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.managedServiceConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `openapi_documents`<sup>Optional</sup> <a name="openapi_documents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.openapiDocuments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig">put_gateway_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices">put_grpc_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs">put_managed_service_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments">put_openapi_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId">reset_api_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix">reset_api_config_id_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig">reset_gateway_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices">reset_grpc_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs">reset_managed_service_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments">reset_openapi_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gateway_config` <a name="put_gateway_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig"></a>

```python
def put_gateway_config(
  backend_config: GoogleApiGatewayApiConfigGatewayConfigBackendConfig
) -> None
```

###### `backend_config`<sup>Required</sup> <a name="backend_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig.parameter.backendConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}

---

##### `put_grpc_services` <a name="put_grpc_services" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices"></a>

```python
def put_grpc_services(
  value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]

---

##### `put_managed_service_configs` <a name="put_managed_service_configs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs"></a>

```python
def put_managed_service_configs(
  value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]

---

##### `put_openapi_documents` <a name="put_openapi_documents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments"></a>

```python
def put_openapi_documents(
  value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}.

---

##### `reset_api_config_id` <a name="reset_api_config_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId"></a>

```python
def reset_api_config_id() -> None
```

##### `reset_api_config_id_prefix` <a name="reset_api_config_id_prefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix"></a>

```python
def reset_api_config_id_prefix() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gateway_config` <a name="reset_gateway_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig"></a>

```python
def reset_gateway_config() -> None
```

##### `reset_grpc_services` <a name="reset_grpc_services" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices"></a>

```python
def reset_grpc_services() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_managed_service_configs` <a name="reset_managed_service_configs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs"></a>

```python
def reset_managed_service_configs() -> None
```

##### `reset_openapi_documents` <a name="reset_openapi_documents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments"></a>

```python
def reset_openapi_documents() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApiGatewayApiConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApiGatewayApiConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayApiConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices">grpc_services</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs">managed_service_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments">openapi_documents</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId">service_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput">api_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput">api_config_id_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput">gateway_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput">grpc_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput">managed_service_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput">openapi_documents_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId">api_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix">api_config_id_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gateway_config`<sup>Required</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig"></a>

```python
gateway_config: GoogleApiGatewayApiConfigGatewayConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a>

---

##### `grpc_services`<sup>Required</sup> <a name="grpc_services" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices"></a>

```python
grpc_services: GoogleApiGatewayApiConfigGrpcServicesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a>

---

##### `managed_service_configs`<sup>Required</sup> <a name="managed_service_configs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs"></a>

```python
managed_service_configs: GoogleApiGatewayApiConfigManagedServiceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `openapi_documents`<sup>Required</sup> <a name="openapi_documents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments"></a>

```python
openapi_documents: GoogleApiGatewayApiConfigOpenapiDocumentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a>

---

##### `service_config_id`<sup>Required</sup> <a name="service_config_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId"></a>

```python
service_config_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts"></a>

```python
timeouts: GoogleApiGatewayApiConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a>

---

##### `api_config_id_input`<sup>Optional</sup> <a name="api_config_id_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput"></a>

```python
api_config_id_input: str
```

- *Type:* str

---

##### `api_config_id_prefix_input`<sup>Optional</sup> <a name="api_config_id_prefix_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput"></a>

```python
api_config_id_prefix_input: str
```

- *Type:* str

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gateway_config_input`<sup>Optional</sup> <a name="gateway_config_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput"></a>

```python
gateway_config_input: GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `grpc_services_input`<sup>Optional</sup> <a name="grpc_services_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput"></a>

```python
grpc_services_input: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `managed_service_configs_input`<sup>Optional</sup> <a name="managed_service_configs_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput"></a>

```python
managed_service_configs_input: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]

---

##### `openapi_documents_input`<sup>Optional</sup> <a name="openapi_documents_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput"></a>

```python
openapi_documents_input: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApiGatewayApiConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `api_config_id`<sup>Required</sup> <a name="api_config_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId"></a>

```python
api_config_id: str
```

- *Type:* str

---

##### `api_config_id_prefix`<sup>Required</sup> <a name="api_config_id_prefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix"></a>

```python
api_config_id_prefix: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigAConfig <a name="GoogleApiGatewayApiConfigAConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api: str,
  api_config_id: str = None,
  api_config_id_prefix: str = None,
  display_name: str = None,
  gateway_config: GoogleApiGatewayApiConfigGatewayConfig = None,
  grpc_services: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  managed_service_configs: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]] = None,
  openapi_documents: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]] = None,
  project: str = None,
  timeouts: GoogleApiGatewayApiConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api">api</a></code> | <code>str</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId">api_config_id</a></code> | <code>str</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix">api_config_id_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices">grpc_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]</code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs">managed_service_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]</code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments">openapi_documents</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]</code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api"></a>

```python
api: str
```

- *Type:* str

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `api_config_id`<sup>Optional</sup> <a name="api_config_id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId"></a>

```python
api_config_id: str
```

- *Type:* str

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `api_config_id_prefix`<sup>Optional</sup> <a name="api_config_id_prefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix"></a>

```python
api_config_id_prefix: str
```

- *Type:* str

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `gateway_config`<sup>Optional</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig"></a>

```python
gateway_config: GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `grpc_services`<sup>Optional</sup> <a name="grpc_services" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices"></a>

```python
grpc_services: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `managed_service_configs`<sup>Optional</sup> <a name="managed_service_configs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs"></a>

```python
managed_service_configs: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `openapi_documents`<sup>Optional</sup> <a name="openapi_documents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments"></a>

```python
openapi_documents: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts"></a>

```python
timeouts: GoogleApiGatewayApiConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

### GoogleApiGatewayApiConfigGatewayConfig <a name="GoogleApiGatewayApiConfigGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig(
  backend_config: GoogleApiGatewayApiConfigGatewayConfigBackendConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig">backend_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | backend_config block. |

---

##### `backend_config`<sup>Required</sup> <a name="backend_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig"></a>

```python
backend_config: GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}

---

### GoogleApiGatewayApiConfigGatewayConfigBackendConfig <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig(
  google_service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). |

---

##### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}

---

### GoogleApiGatewayApiConfigGrpcServices <a name="GoogleApiGatewayApiConfigGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices(
  file_descriptor_set: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet,
  source: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServicesSource]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet">file_descriptor_set</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | file_descriptor_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]</code> | source block. |

---

##### `file_descriptor_set`<sup>Required</sup> <a name="file_descriptor_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet"></a>

```python
file_descriptor_set: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

file_descriptor_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source"></a>

```python
source: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServicesSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}

---

### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet(
  contents: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents">contents</a></code> | <code>str</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path">path</a></code> | <code>str</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents"></a>

```python
contents: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path"></a>

```python
path: str
```

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigGrpcServicesSource <a name="GoogleApiGatewayApiConfigGrpcServicesSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource(
  contents: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents">contents</a></code> | <code>str</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path">path</a></code> | <code>str</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents"></a>

```python
contents: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path"></a>

```python
path: str
```

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigManagedServiceConfigs <a name="GoogleApiGatewayApiConfigManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs(
  contents: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents">contents</a></code> | <code>str</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path">path</a></code> | <code>str</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents"></a>

```python
contents: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path"></a>

```python
path: str
```

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigOpenapiDocuments <a name="GoogleApiGatewayApiConfigOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments(
  document: GoogleApiGatewayApiConfigOpenapiDocumentsDocument
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document">document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | document block. |

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document"></a>

```python
document: GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}

---

### GoogleApiGatewayApiConfigOpenapiDocumentsDocument <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument(
  contents: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents">contents</a></code> | <code>str</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path">path</a></code> | <code>str</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents"></a>

```python
contents: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path"></a>

```python
path: str
```

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigTimeouts <a name="GoogleApiGatewayApiConfigTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput">google_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_service_account_input`<sup>Optional</sup> <a name="google_service_account_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput"></a>

```python
google_service_account_input: str
```

- *Type:* str

---

##### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


### GoogleApiGatewayApiConfigGatewayConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig">put_backend_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_config` <a name="put_backend_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig"></a>

```python
def put_backend_config(
  google_service_account: str
) -> None
```

###### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig.parameter.googleServiceAccount"></a>

- *Type:* str

Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig">backend_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput">backend_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_config`<sup>Required</sup> <a name="backend_config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig"></a>

```python
backend_config: GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a>

---

##### `backend_config_input`<sup>Optional</sup> <a name="backend_config_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput"></a>

```python
backend_config_input: GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---


### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput">contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput"></a>

```python
contents_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---


### GoogleApiGatewayApiConfigGrpcServicesList <a name="GoogleApiGatewayApiConfigGrpcServicesList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApiGatewayApiConfigGrpcServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]]

---


### GoogleApiGatewayApiConfigGrpcServicesOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet">put_file_descriptor_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_descriptor_set` <a name="put_file_descriptor_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet"></a>

```python
def put_file_descriptor_set(
  contents: str,
  path: str
) -> None
```

###### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet.parameter.contents"></a>

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet.parameter.path"></a>

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource"></a>

```python
def put_source(
  value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServicesSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]

---

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet">file_descriptor_set</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput">file_descriptor_set_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_descriptor_set`<sup>Required</sup> <a name="file_descriptor_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet"></a>

```python
file_descriptor_set: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source"></a>

```python
source: GoogleApiGatewayApiConfigGrpcServicesSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a>

---

##### `file_descriptor_set_input`<sup>Optional</sup> <a name="file_descriptor_set_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput"></a>

```python
file_descriptor_set_input: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServicesSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApiGatewayApiConfigGrpcServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices">GoogleApiGatewayApiConfigGrpcServices</a>]

---


### GoogleApiGatewayApiConfigGrpcServicesSourceList <a name="GoogleApiGatewayApiConfigGrpcServicesSourceList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigGrpcServicesSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]]

---


### GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput">contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput"></a>

```python
contents_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApiGatewayApiConfigGrpcServicesSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource">GoogleApiGatewayApiConfigGrpcServicesSource</a>]

---


### GoogleApiGatewayApiConfigManagedServiceConfigsList <a name="GoogleApiGatewayApiConfigManagedServiceConfigsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigManagedServiceConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]]

---


### GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference <a name="GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput">contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput"></a>

```python
contents_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApiGatewayApiConfigManagedServiceConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs">GoogleApiGatewayApiConfigManagedServiceConfigs</a>]

---


### GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput">contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput"></a>

```python
contents_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsList <a name="GoogleApiGatewayApiConfigOpenapiDocumentsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApiGatewayApiConfigOpenapiDocuments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]]

---


### GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument">put_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_document` <a name="put_document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument"></a>

```python
def put_document(
  contents: str,
  path: str
) -> None
```

###### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument.parameter.contents"></a>

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument.parameter.path"></a>

- *Type:* str

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document">document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput">document_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document"></a>

```python
document: GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a>

---

##### `document_input`<sup>Optional</sup> <a name="document_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput"></a>

```python
document_input: GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApiGatewayApiConfigOpenapiDocuments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments">GoogleApiGatewayApiConfigOpenapiDocuments</a>]

---


### GoogleApiGatewayApiConfigTimeoutsOutputReference <a name="GoogleApiGatewayApiConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_api_gateway_api_config

googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApiGatewayApiConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>]

---



