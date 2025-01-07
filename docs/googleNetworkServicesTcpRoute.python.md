# `googleNetworkServicesTcpRoute` Submodule <a name="`googleNetworkServicesTcpRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTcpRoute <a name="GoogleNetworkServicesTcpRoute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route google_network_services_tcp_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesTcpRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#name GoogleNetworkServicesTcpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#rules GoogleNetworkServicesTcpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#description GoogleNetworkServicesTcpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#gateways GoogleNetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#labels GoogleNetworkServicesTcpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.meshes"></a>

- *Type:* typing.List[str]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#meshes GoogleNetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#timeouts GoogleNetworkServicesTcpRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetMeshes">reset_meshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#create GoogleNetworkServicesTcpRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#delete GoogleNetworkServicesTcpRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#update GoogleNetworkServicesTcpRoute#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_meshes` <a name="reset_meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetMeshes"></a>

```python
def reset_meshes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesTcpRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesTcpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTcpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList">GoogleNetworkServicesTcpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference">GoogleNetworkServicesTcpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshesInput">meshes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rules"></a>

```python
rules: GoogleNetworkServicesTcpRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList">GoogleNetworkServicesTcpRouteRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesTcpRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference">GoogleNetworkServicesTcpRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes_input`<sup>Optional</sup> <a name="meshes_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshesInput"></a>

```python
meshes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesTcpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTcpRouteConfig <a name="GoogleNetworkServicesTcpRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesTcpRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#name GoogleNetworkServicesTcpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#rules GoogleNetworkServicesTcpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#description GoogleNetworkServicesTcpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#gateways GoogleNetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#labels GoogleNetworkServicesTcpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#meshes GoogleNetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesTcpRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#timeouts GoogleNetworkServicesTcpRoute#timeouts}

---

### GoogleNetworkServicesTcpRouteRules <a name="GoogleNetworkServicesTcpRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules(
  action: GoogleNetworkServicesTcpRouteRulesAction,
  matches: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesMatches]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.matches">matches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]</code> | matches block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.action"></a>

```python
action: GoogleNetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#action GoogleNetworkServicesTcpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.matches"></a>

```python
matches: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#matches GoogleNetworkServicesTcpRoute#matches}

---

### GoogleNetworkServicesTcpRouteRulesAction <a name="GoogleNetworkServicesTcpRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction(
  destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]] = None,
  idle_timeout: str = None,
  original_destination: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | Specifies the idle timeout for the selected route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.originalDestination">original_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Router will use the destination IP and port of the original connection as the destination of the request. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#destinations GoogleNetworkServicesTcpRoute#destinations}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#idle_timeout GoogleNetworkServicesTcpRoute#idle_timeout}

---

##### `original_destination`<sup>Optional</sup> <a name="original_destination" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.originalDestination"></a>

```python
original_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#original_destination GoogleNetworkServicesTcpRoute#original_destination}

---

### GoogleNetworkServicesTcpRouteRulesActionDestinations <a name="GoogleNetworkServicesTcpRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#service_name GoogleNetworkServicesTcpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#weight GoogleNetworkServicesTcpRoute#weight}

---

### GoogleNetworkServicesTcpRouteRulesMatches <a name="GoogleNetworkServicesTcpRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches(
  address: str,
  port: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.address">address</a></code> | <code>str</code> | Must be specified in the CIDR range format. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.port">port</a></code> | <code>str</code> | Specifies the destination port to match against. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.address"></a>

```python
address: str
```

- *Type:* str

Must be specified in the CIDR range format.

A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#address GoogleNetworkServicesTcpRoute#address}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.port"></a>

```python
port: str
```

- *Type:* str

Specifies the destination port to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#port GoogleNetworkServicesTcpRoute#port}

---

### GoogleNetworkServicesTcpRouteTimeouts <a name="GoogleNetworkServicesTcpRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#create GoogleNetworkServicesTcpRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#delete GoogleNetworkServicesTcpRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#update GoogleNetworkServicesTcpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#create GoogleNetworkServicesTcpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#delete GoogleNetworkServicesTcpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#update GoogleNetworkServicesTcpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTcpRouteRulesActionDestinationsList <a name="GoogleNetworkServicesTcpRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]

---


### GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesTcpRouteRulesActionDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]

---


### GoogleNetworkServicesTcpRouteRulesActionOutputReference <a name="GoogleNetworkServicesTcpRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination">reset_original_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_original_destination` <a name="reset_original_destination" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination"></a>

```python
def reset_original_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList">GoogleNetworkServicesTcpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput">original_destination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination">original_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinations"></a>

```python
destinations: GoogleNetworkServicesTcpRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList">GoogleNetworkServicesTcpRouteRulesActionDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `original_destination_input`<sup>Optional</sup> <a name="original_destination_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput"></a>

```python
original_destination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `original_destination`<sup>Required</sup> <a name="original_destination" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination"></a>

```python
original_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

---


### GoogleNetworkServicesTcpRouteRulesList <a name="GoogleNetworkServicesTcpRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesTcpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]]

---


### GoogleNetworkServicesTcpRouteRulesMatchesList <a name="GoogleNetworkServicesTcpRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesTcpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]

---


### GoogleNetworkServicesTcpRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesTcpRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesTcpRouteRulesMatches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]

---


### GoogleNetworkServicesTcpRouteRulesOutputReference <a name="GoogleNetworkServicesTcpRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches">put_matches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resetMatches">reset_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction"></a>

```python
def put_action(
  destinations: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesActionDestinations]] = None,
  idle_timeout: str = None,
  original_destination: typing.Union[bool, IResolvable] = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#destinations GoogleNetworkServicesTcpRoute#destinations}

---

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction.parameter.idleTimeout"></a>

- *Type:* str

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#idle_timeout GoogleNetworkServicesTcpRoute#idle_timeout}

---

###### `original_destination`<sup>Optional</sup> <a name="original_destination" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction.parameter.originalDestination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_tcp_route#original_destination GoogleNetworkServicesTcpRoute#original_destination}

---

##### `put_matches` <a name="put_matches" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches"></a>

```python
def put_matches(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesMatches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]

---

##### `reset_matches` <a name="reset_matches" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resetMatches"></a>

```python
def reset_matches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference">GoogleNetworkServicesTcpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList">GoogleNetworkServicesTcpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matchesInput">matches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.action"></a>

```python
action: GoogleNetworkServicesTcpRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference">GoogleNetworkServicesTcpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matches"></a>

```python
matches: GoogleNetworkServicesTcpRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList">GoogleNetworkServicesTcpRouteRulesMatchesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.actionInput"></a>

```python
action_input: GoogleNetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

---

##### `matches_input`<sup>Optional</sup> <a name="matches_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matchesInput"></a>

```python
matches_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesTcpRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>]

---


### GoogleNetworkServicesTcpRouteTimeoutsOutputReference <a name="GoogleNetworkServicesTcpRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_tcp_route

googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesTcpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>]

---



