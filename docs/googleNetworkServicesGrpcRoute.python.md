# `googleNetworkServicesGrpcRoute` Submodule <a name="`googleNetworkServicesGrpcRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesGrpcRoute <a name="GoogleNetworkServicesGrpcRoute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route google_network_services_grpc_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostnames: typing.List[str],
  name: str,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesGrpcRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.meshes">meshes</a></code> | <code>typing.List[str]</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.hostnames"></a>

- *Type:* typing.List[str]

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#hostnames GoogleNetworkServicesGrpcRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#name GoogleNetworkServicesGrpcRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#rules GoogleNetworkServicesGrpcRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#description GoogleNetworkServicesGrpcRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#gateways GoogleNetworkServicesGrpcRoute#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#labels GoogleNetworkServicesGrpcRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.meshes"></a>

- *Type:* typing.List[str]

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#meshes GoogleNetworkServicesGrpcRoute#meshes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#timeouts GoogleNetworkServicesGrpcRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetMeshes">reset_meshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#create GoogleNetworkServicesGrpcRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#delete GoogleNetworkServicesGrpcRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#update GoogleNetworkServicesGrpcRoute#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_meshes` <a name="reset_meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetMeshes"></a>

```python
def reset_meshes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesGrpcRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesGrpcRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesGrpcRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList">GoogleNetworkServicesGrpcRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference">GoogleNetworkServicesGrpcRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshesInput">meshes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rules"></a>

```python
rules: GoogleNetworkServicesGrpcRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList">GoogleNetworkServicesGrpcRouteRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesGrpcRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference">GoogleNetworkServicesGrpcRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes_input`<sup>Optional</sup> <a name="meshes_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshesInput"></a>

```python
meshes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesGrpcRouteConfig <a name="GoogleNetworkServicesGrpcRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostnames: typing.List[str],
  name: str,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesGrpcRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#hostnames GoogleNetworkServicesGrpcRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#name GoogleNetworkServicesGrpcRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#rules GoogleNetworkServicesGrpcRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#description GoogleNetworkServicesGrpcRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#gateways GoogleNetworkServicesGrpcRoute#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#labels GoogleNetworkServicesGrpcRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#meshes GoogleNetworkServicesGrpcRoute#meshes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesGrpcRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#timeouts GoogleNetworkServicesGrpcRoute#timeouts}

---

### GoogleNetworkServicesGrpcRouteRules <a name="GoogleNetworkServicesGrpcRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules(
  action: GoogleNetworkServicesGrpcRouteRulesAction = None,
  matches: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatches]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.matches">matches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]</code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.action"></a>

```python
action: GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#action GoogleNetworkServicesGrpcRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.matches"></a>

```python
matches: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#matches GoogleNetworkServicesGrpcRoute#matches}

---

### GoogleNetworkServicesGrpcRouteRulesAction <a name="GoogleNetworkServicesGrpcRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction(
  destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]] = None,
  fault_injection_policy: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy = None,
  retry_policy: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy">fault_injection_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for selected route. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#destinations GoogleNetworkServicesGrpcRoute#destinations}

---

##### `fault_injection_policy`<sup>Optional</sup> <a name="fault_injection_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy"></a>

```python
fault_injection_policy: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#fault_injection_policy GoogleNetworkServicesGrpcRoute#fault_injection_policy}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.retryPolicy"></a>

```python
retry_policy: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#retry_policy GoogleNetworkServicesGrpcRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#timeout GoogleNetworkServicesGrpcRoute#timeout}

---

### GoogleNetworkServicesGrpcRouteRulesActionDestinations <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#service_name GoogleNetworkServicesGrpcRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#weight GoogleNetworkServicesGrpcRoute#weight}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy(
  abort: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort = None,
  delay: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```python
abort: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#abort GoogleNetworkServicesGrpcRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```python
delay: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#delay GoogleNetworkServicesGrpcRoute#delay}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort(
  http_status: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">http_status</a></code> | <code>typing.Union[int, float]</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic which will be aborted. |

---

##### `http_status`<sup>Optional</sup> <a name="http_status" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```python
http_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#http_status GoogleNetworkServicesGrpcRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay(
  fixed_delay: str = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixed_delay</a></code> | <code>str</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixed_delay`<sup>Optional</sup> <a name="fixed_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```python
fixed_delay: str
```

- *Type:* str

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#fixed_delay GoogleNetworkServicesGrpcRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

### GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy <a name="GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy(
  num_retries: typing.Union[int, float] = None,
  retry_conditions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"]. |

---

##### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#num_retries GoogleNetworkServicesGrpcRoute#num_retries}

---

##### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#retry_conditions GoogleNetworkServicesGrpcRoute#retry_conditions}

---

### GoogleNetworkServicesGrpcRouteRulesMatches <a name="GoogleNetworkServicesGrpcRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches(
  headers: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]] = None,
  method: GoogleNetworkServicesGrpcRouteRulesMatchesMethod = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.method">method</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | method block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#headers GoogleNetworkServicesGrpcRoute#headers}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.method"></a>

```python
method: GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#method GoogleNetworkServicesGrpcRoute#method}

---

### GoogleNetworkServicesGrpcRouteRulesMatchesHeaders <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders(
  key: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.key">key</a></code> | <code>str</code> | Required. The key of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.value">value</a></code> | <code>str</code> | Required. The value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.type">type</a></code> | <code>str</code> | The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Required. The key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#key GoogleNetworkServicesGrpcRoute#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Required. The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#value GoogleNetworkServicesGrpcRoute#value}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.type"></a>

```python
type: str
```

- *Type:* str

The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#type GoogleNetworkServicesGrpcRoute#type}

---

### GoogleNetworkServicesGrpcRouteRulesMatchesMethod <a name="GoogleNetworkServicesGrpcRouteRulesMatchesMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod(
  grpc_method: str,
  grpc_service: str,
  case_sensitive: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod">grpc_method</a></code> | <code>str</code> | Required. Name of the method to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService">grpc_service</a></code> | <code>str</code> | Required. Name of the service to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that matches are case sensitive. The default value is true. |

---

##### `grpc_method`<sup>Required</sup> <a name="grpc_method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod"></a>

```python
grpc_method: str
```

- *Type:* str

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#grpc_method GoogleNetworkServicesGrpcRoute#grpc_method}

---

##### `grpc_service`<sup>Required</sup> <a name="grpc_service" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService"></a>

```python
grpc_service: str
```

- *Type:* str

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#grpc_service GoogleNetworkServicesGrpcRoute#grpc_service}

---

##### `case_sensitive`<sup>Optional</sup> <a name="case_sensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#case_sensitive GoogleNetworkServicesGrpcRoute#case_sensitive}

---

### GoogleNetworkServicesGrpcRouteTimeouts <a name="GoogleNetworkServicesGrpcRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#create GoogleNetworkServicesGrpcRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#delete GoogleNetworkServicesGrpcRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#update GoogleNetworkServicesGrpcRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#create GoogleNetworkServicesGrpcRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#delete GoogleNetworkServicesGrpcRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#update GoogleNetworkServicesGrpcRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesGrpcRouteRulesActionDestinationsList <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]

---


### GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteRulesActionDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">reset_http_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_status` <a name="reset_http_status" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```python
def reset_http_status() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">http_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">http_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_status_input`<sup>Optional</sup> <a name="http_status_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```python
http_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_status`<sup>Required</sup> <a name="http_status" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```python
http_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">reset_fixed_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed_delay` <a name="reset_fixed_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```python
def reset_fixed_delay() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixed_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixed_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_delay_input`<sup>Optional</sup> <a name="fixed_delay_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```python
fixed_delay_input: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_delay`<sup>Required</sup> <a name="fixed_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```python
fixed_delay: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">put_abort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">put_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">reset_abort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">reset_delay</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort` <a name="put_abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```python
def put_abort(
  http_status: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
) -> None
```

###### `http_status`<sup>Optional</sup> <a name="http_status" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.httpStatus"></a>

- *Type:* typing.Union[int, float]

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#http_status GoogleNetworkServicesGrpcRoute#http_status}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

##### `put_delay` <a name="put_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```python
def put_delay(
  fixed_delay: str = None,
  percentage: typing.Union[int, float] = None
) -> None
```

###### `fixed_delay`<sup>Optional</sup> <a name="fixed_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.fixedDelay"></a>

- *Type:* str

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#fixed_delay GoogleNetworkServicesGrpcRoute#fixed_delay}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

##### `reset_abort` <a name="reset_abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```python
def reset_abort() -> None
```

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abort_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delay_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```python
abort: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```python
delay: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abort_input`<sup>Optional</sup> <a name="abort_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```python
abort_input: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```python
delay_input: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy">put_fault_injection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy">reset_fault_injection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]

---

##### `put_fault_injection_policy` <a name="put_fault_injection_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```python
def put_fault_injection_policy(
  abort: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort = None,
  delay: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay = None
) -> None
```

###### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.abort"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#abort GoogleNetworkServicesGrpcRoute#abort}

---

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.delay"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#delay GoogleNetworkServicesGrpcRoute#delay}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  num_retries: typing.Union[int, float] = None,
  retry_conditions: typing.List[str] = None
) -> None
```

###### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.numRetries"></a>

- *Type:* typing.Union[int, float]

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#num_retries GoogleNetworkServicesGrpcRoute#num_retries}

---

###### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.retryConditions"></a>

- *Type:* typing.List[str]

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#retry_conditions GoogleNetworkServicesGrpcRoute#retry_conditions}

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_fault_injection_policy` <a name="reset_fault_injection_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```python
def reset_fault_injection_policy() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList">GoogleNetworkServicesGrpcRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy">fault_injection_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput">fault_injection_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinations"></a>

```python
destinations: GoogleNetworkServicesGrpcRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList">GoogleNetworkServicesGrpcRouteRulesActionDestinationsList</a>

---

##### `fault_injection_policy`<sup>Required</sup> <a name="fault_injection_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```python
fault_injection_policy: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy"></a>

```python
retry_policy: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]

---

##### `fault_injection_policy_input`<sup>Optional</sup> <a name="fault_injection_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```python
fault_injection_policy_input: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries">reset_num_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">reset_retry_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_num_retries` <a name="reset_num_retries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```python
def reset_num_retries() -> None
```

##### `reset_retry_conditions` <a name="reset_retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```python
def reset_retry_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">num_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retry_conditions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_retries_input`<sup>Optional</sup> <a name="num_retries_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```python
num_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_conditions_input`<sup>Optional</sup> <a name="retry_conditions_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```python
retry_conditions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `num_retries`<sup>Required</sup> <a name="num_retries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_conditions`<sup>Required</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---


### GoogleNetworkServicesGrpcRouteRulesList <a name="GoogleNetworkServicesGrpcRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesGrpcRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]]

---


### GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]

---


### GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]

---


### GoogleNetworkServicesGrpcRouteRulesMatchesList <a name="GoogleNetworkServicesGrpcRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]

---


### GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive">reset_case_sensitive</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_case_sensitive` <a name="reset_case_sensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive"></a>

```python
def reset_case_sensitive() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput">case_sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput">grpc_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput">grpc_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod">grpc_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService">grpc_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive_input`<sup>Optional</sup> <a name="case_sensitive_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput"></a>

```python
case_sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grpc_method_input`<sup>Optional</sup> <a name="grpc_method_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput"></a>

```python
grpc_method_input: str
```

- *Type:* str

---

##### `grpc_service_input`<sup>Optional</sup> <a name="grpc_service_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput"></a>

```python
grpc_service_input: str
```

- *Type:* str

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grpc_method`<sup>Required</sup> <a name="grpc_method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod"></a>

```python
grpc_method: str
```

- *Type:* str

---

##### `grpc_service`<sup>Required</sup> <a name="grpc_service" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService"></a>

```python
grpc_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

---


### GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod">put_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod">reset_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]

---

##### `put_method` <a name="put_method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod"></a>

```python
def put_method(
  grpc_method: str,
  grpc_service: str,
  case_sensitive: typing.Union[bool, IResolvable] = None
) -> None
```

###### `grpc_method`<sup>Required</sup> <a name="grpc_method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.grpcMethod"></a>

- *Type:* str

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#grpc_method GoogleNetworkServicesGrpcRoute#grpc_method}

---

###### `grpc_service`<sup>Required</sup> <a name="grpc_service" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.grpcService"></a>

- *Type:* str

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#grpc_service GoogleNetworkServicesGrpcRoute#grpc_service}

---

###### `case_sensitive`<sup>Optional</sup> <a name="case_sensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.caseSensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#case_sensitive GoogleNetworkServicesGrpcRoute#case_sensitive}

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList">GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.method">method</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference">GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput">method_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers"></a>

```python
headers: GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList">GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.method"></a>

```python
method: GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference">GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders">GoogleNetworkServicesGrpcRouteRulesMatchesHeaders</a>]]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput"></a>

```python
method_input: GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteRulesMatches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]

---


### GoogleNetworkServicesGrpcRouteRulesOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches">put_matches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetMatches">reset_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction"></a>

```python
def put_action(
  destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesActionDestinations]] = None,
  fault_injection_policy: GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy = None,
  retry_policy: GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy = None,
  timeout: str = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations">GoogleNetworkServicesGrpcRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#destinations GoogleNetworkServicesGrpcRoute#destinations}

---

###### `fault_injection_policy`<sup>Optional</sup> <a name="fault_injection_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.faultInjectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#fault_injection_policy GoogleNetworkServicesGrpcRoute#fault_injection_policy}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#retry_policy GoogleNetworkServicesGrpcRoute#retry_policy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.timeout"></a>

- *Type:* str

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_grpc_route#timeout GoogleNetworkServicesGrpcRoute#timeout}

---

##### `put_matches` <a name="put_matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches"></a>

```python
def put_matches(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_matches` <a name="reset_matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetMatches"></a>

```python
def reset_matches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference">GoogleNetworkServicesGrpcRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList">GoogleNetworkServicesGrpcRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matchesInput">matches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.action"></a>

```python
action: GoogleNetworkServicesGrpcRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference">GoogleNetworkServicesGrpcRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matches"></a>

```python
matches: GoogleNetworkServicesGrpcRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList">GoogleNetworkServicesGrpcRouteRulesMatchesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.actionInput"></a>

```python
action_input: GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

---

##### `matches_input`<sup>Optional</sup> <a name="matches_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matchesInput"></a>

```python
matches_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesGrpcRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches">GoogleNetworkServicesGrpcRouteRulesMatches</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules">GoogleNetworkServicesGrpcRouteRules</a>]

---


### GoogleNetworkServicesGrpcRouteTimeoutsOutputReference <a name="GoogleNetworkServicesGrpcRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_grpc_route

googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGrpcRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>]

---



