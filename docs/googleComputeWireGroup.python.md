# `googleComputeWireGroup` Submodule <a name="`googleComputeWireGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeWireGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeWireGroup <a name="GoogleComputeWireGroup" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group google_compute_wire_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cross_site_network: str,
  name: str,
  admin_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  endpoints: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeWireGroupTimeouts = None,
  wire_group_properties: GoogleComputeWireGroupWireGroupProperties = None,
  wire_properties: GoogleComputeWireGroupWireProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.crossSiteNetwork">cross_site_network</a></code> | <code>str</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.wireGroupProperties">wire_group_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | wire_group_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.wireProperties">wire_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cross_site_network`<sup>Required</sup> <a name="cross_site_network" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.crossSiteNetwork"></a>

- *Type:* str

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#cross_site_network GoogleComputeWireGroup#cross_site_network}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#name GoogleComputeWireGroup#name}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#admin_enabled GoogleComputeWireGroup#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#description GoogleComputeWireGroup#description}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.endpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#endpoints GoogleComputeWireGroup#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#timeouts GoogleComputeWireGroup#timeouts}

---

##### `wire_group_properties`<sup>Optional</sup> <a name="wire_group_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.wireGroupProperties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

wire_group_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#wire_group_properties GoogleComputeWireGroup#wire_group_properties}

---

##### `wire_properties`<sup>Optional</sup> <a name="wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.wireProperties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#wire_properties GoogleComputeWireGroup#wire_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints">put_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties">put_wire_group_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties">put_wire_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints">reset_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties">reset_wire_group_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties">reset_wire_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoints` <a name="put_endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints"></a>

```python
def put_endpoints(
  value: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}.

---

##### `put_wire_group_properties` <a name="put_wire_group_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties"></a>

```python
def put_wire_group_properties(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties.parameter.type"></a>

- *Type:* str

Type of wire group (enum).

WIRE: a single pseudowire over two Interconnect connections   with no redundancy.
REDUNDANT: two pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
BOX_AND_CROSS: four pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#type GoogleComputeWireGroup#type}

---

##### `put_wire_properties` <a name="put_wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties"></a>

```python
def put_wire_properties(
  bandwidth_unmetered: typing.Union[int, float] = None,
  fault_response: str = None
) -> None
```

###### `bandwidth_unmetered`<sup>Optional</sup> <a name="bandwidth_unmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties.parameter.bandwidthUnmetered"></a>

- *Type:* typing.Union[int, float]

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#bandwidth_unmetered GoogleComputeWireGroup#bandwidth_unmetered}

---

###### `fault_response`<sup>Optional</sup> <a name="fault_response" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties.parameter.faultResponse"></a>

- *Type:* str

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#fault_response GoogleComputeWireGroup#fault_response}

---

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wire_group_properties` <a name="reset_wire_group_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties"></a>

```python
def reset_wire_group_properties() -> None
```

##### `reset_wire_properties` <a name="reset_wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties"></a>

```python
def reset_wire_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeWireGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeWireGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeWireGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties">wire_group_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties">wire_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires">wires</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput">cross_site_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput">endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput">wire_group_properties_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput">wire_properties_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork">cross_site_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints"></a>

```python
endpoints: GoogleComputeWireGroupEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts"></a>

```python
timeouts: GoogleComputeWireGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a>

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology"></a>

```python
topology: GoogleComputeWireGroupTopologyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a>

---

##### `wire_group_properties`<sup>Required</sup> <a name="wire_group_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties"></a>

```python
wire_group_properties: GoogleComputeWireGroupWireGroupPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a>

---

##### `wire_properties`<sup>Required</sup> <a name="wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties"></a>

```python
wire_properties: GoogleComputeWireGroupWirePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a>

---

##### `wires`<sup>Required</sup> <a name="wires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires"></a>

```python
wires: GoogleComputeWireGroupWiresList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a>

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_site_network_input`<sup>Optional</sup> <a name="cross_site_network_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput"></a>

```python
cross_site_network_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput"></a>

```python
endpoints_input: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeWireGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>]

---

##### `wire_group_properties_input`<sup>Optional</sup> <a name="wire_group_properties_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput"></a>

```python
wire_group_properties_input: GoogleComputeWireGroupWireGroupProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---

##### `wire_properties_input`<sup>Optional</sup> <a name="wire_properties_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput"></a>

```python
wire_properties_input: GoogleComputeWireGroupWireProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_site_network`<sup>Required</sup> <a name="cross_site_network" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork"></a>

```python
cross_site_network: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeWireGroupConfig <a name="GoogleComputeWireGroupConfig" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cross_site_network: str,
  name: str,
  admin_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  endpoints: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeWireGroupTimeouts = None,
  wire_group_properties: GoogleComputeWireGroupWireGroupProperties = None,
  wire_properties: GoogleComputeWireGroupWireProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork">cross_site_network</a></code> | <code>str</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties">wire_group_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | wire_group_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties">wire_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cross_site_network`<sup>Required</sup> <a name="cross_site_network" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork"></a>

```python
cross_site_network: str
```

- *Type:* str

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#cross_site_network GoogleComputeWireGroup#cross_site_network}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#name GoogleComputeWireGroup#name}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#admin_enabled GoogleComputeWireGroup#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#description GoogleComputeWireGroup#description}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints"></a>

```python
endpoints: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#endpoints GoogleComputeWireGroup#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeWireGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#timeouts GoogleComputeWireGroup#timeouts}

---

##### `wire_group_properties`<sup>Optional</sup> <a name="wire_group_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties"></a>

```python
wire_group_properties: GoogleComputeWireGroupWireGroupProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

wire_group_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#wire_group_properties GoogleComputeWireGroup#wire_group_properties}

---

##### `wire_properties`<sup>Optional</sup> <a name="wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties"></a>

```python
wire_properties: GoogleComputeWireGroupWireProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#wire_properties GoogleComputeWireGroup#wire_properties}

---

### GoogleComputeWireGroupEndpoints <a name="GoogleComputeWireGroupEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpoints(
  endpoint: str,
  interconnects: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpointsInterconnects]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects">interconnects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]</code> | interconnects block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects"></a>

```python
interconnects: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpointsInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#interconnects GoogleComputeWireGroup#interconnects}

---

### GoogleComputeWireGroupEndpointsInterconnects <a name="GoogleComputeWireGroupEndpointsInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects(
  interconnect_name: str,
  interconnect: str = None,
  vlan_tags: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName">interconnect_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect">interconnect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags">vlan_tags</a></code> | <code>typing.List[typing.Union[int, float]]</code> | VLAN tags for the interconnect. |

---

##### `interconnect_name`<sup>Required</sup> <a name="interconnect_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName"></a>

```python
interconnect_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}.

---

##### `vlan_tags`<sup>Optional</sup> <a name="vlan_tags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags"></a>

```python
vlan_tags: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

VLAN tags for the interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#vlan_tags GoogleComputeWireGroup#vlan_tags}

---

### GoogleComputeWireGroupTimeouts <a name="GoogleComputeWireGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}.

---

### GoogleComputeWireGroupTopology <a name="GoogleComputeWireGroupTopology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopology()
```


### GoogleComputeWireGroupTopologyEndpoints <a name="GoogleComputeWireGroupTopologyEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints()
```


### GoogleComputeWireGroupWireGroupProperties <a name="GoogleComputeWireGroupWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type">type</a></code> | <code>str</code> | Type of wire group (enum). |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type"></a>

```python
type: str
```

- *Type:* str

Type of wire group (enum).

WIRE: a single pseudowire over two Interconnect connections   with no redundancy.
REDUNDANT: two pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
BOX_AND_CROSS: four pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#type GoogleComputeWireGroup#type}

---

### GoogleComputeWireGroupWireProperties <a name="GoogleComputeWireGroupWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWireProperties(
  bandwidth_unmetered: typing.Union[int, float] = None,
  fault_response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered">bandwidth_unmetered</a></code> | <code>typing.Union[int, float]</code> | The unmetered bandwidth setting. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse">fault_response</a></code> | <code>str</code> | Response when a fault is detected in a pseudowire: NONE: default. |

---

##### `bandwidth_unmetered`<sup>Optional</sup> <a name="bandwidth_unmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered"></a>

```python
bandwidth_unmetered: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#bandwidth_unmetered GoogleComputeWireGroup#bandwidth_unmetered}

---

##### `fault_response`<sup>Optional</sup> <a name="fault_response" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse"></a>

```python
fault_response: str
```

- *Type:* str

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_compute_wire_group#fault_response GoogleComputeWireGroup#fault_response}

---

### GoogleComputeWireGroupWires <a name="GoogleComputeWireGroupWires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWires()
```


### GoogleComputeWireGroupWiresEndpoints <a name="GoogleComputeWireGroupWiresEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints()
```


### GoogleComputeWireGroupWiresWireProperties <a name="GoogleComputeWireGroupWiresWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeWireGroupEndpointsInterconnectsList <a name="GoogleComputeWireGroupEndpointsInterconnectsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupEndpointsInterconnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpointsInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]

---


### GoogleComputeWireGroupEndpointsInterconnectsOutputReference <a name="GoogleComputeWireGroupEndpointsInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect">reset_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags">reset_vlan_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interconnect` <a name="reset_interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect"></a>

```python
def reset_interconnect() -> None
```

##### `reset_vlan_tags` <a name="reset_vlan_tags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags"></a>

```python
def reset_vlan_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput">interconnect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput">interconnect_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput">vlan_tags_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName">interconnect_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags">vlan_tags</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interconnect_input`<sup>Optional</sup> <a name="interconnect_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput"></a>

```python
interconnect_input: str
```

- *Type:* str

---

##### `interconnect_name_input`<sup>Optional</sup> <a name="interconnect_name_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput"></a>

```python
interconnect_name_input: str
```

- *Type:* str

---

##### `vlan_tags_input`<sup>Optional</sup> <a name="vlan_tags_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput"></a>

```python
vlan_tags_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

---

##### `interconnect_name`<sup>Required</sup> <a name="interconnect_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName"></a>

```python
interconnect_name: str
```

- *Type:* str

---

##### `vlan_tags`<sup>Required</sup> <a name="vlan_tags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags"></a>

```python
vlan_tags: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeWireGroupEndpointsInterconnects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]

---


### GoogleComputeWireGroupEndpointsList <a name="GoogleComputeWireGroupEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]]

---


### GoogleComputeWireGroupEndpointsOutputReference <a name="GoogleComputeWireGroupEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects">put_interconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects">reset_interconnects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interconnects` <a name="put_interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects"></a>

```python
def put_interconnects(
  value: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpointsInterconnects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]

---

##### `reset_interconnects` <a name="reset_interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects"></a>

```python
def reset_interconnects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects">interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput">interconnects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects"></a>

```python
interconnects: GoogleComputeWireGroupEndpointsInterconnectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a>

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `interconnects_input`<sup>Optional</sup> <a name="interconnects_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput"></a>

```python
interconnects_input: typing.Union[IResolvable, typing.List[GoogleComputeWireGroupEndpointsInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeWireGroupEndpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>]

---


### GoogleComputeWireGroupTimeoutsOutputReference <a name="GoogleComputeWireGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeWireGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>]

---


### GoogleComputeWireGroupTopologyEndpointsList <a name="GoogleComputeWireGroupTopologyEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupTopologyEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeWireGroupTopologyEndpointsOutputReference <a name="GoogleComputeWireGroupTopologyEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupTopologyEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a>

---


### GoogleComputeWireGroupTopologyList <a name="GoogleComputeWireGroupTopologyList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeWireGroupTopologyOutputReference <a name="GoogleComputeWireGroupTopologyOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints"></a>

```python
endpoints: GoogleComputeWireGroupTopologyEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupTopology
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a>

---


### GoogleComputeWireGroupWireGroupPropertiesOutputReference <a name="GoogleComputeWireGroupWireGroupPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupWireGroupProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---


### GoogleComputeWireGroupWirePropertiesOutputReference <a name="GoogleComputeWireGroupWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered">reset_bandwidth_unmetered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse">reset_fault_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bandwidth_unmetered` <a name="reset_bandwidth_unmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered"></a>

```python
def reset_bandwidth_unmetered() -> None
```

##### `reset_fault_response` <a name="reset_fault_response" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse"></a>

```python
def reset_fault_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput">bandwidth_unmetered_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput">fault_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidth_unmetered</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse">fault_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_unmetered_input`<sup>Optional</sup> <a name="bandwidth_unmetered_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput"></a>

```python
bandwidth_unmetered_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_response_input`<sup>Optional</sup> <a name="fault_response_input" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput"></a>

```python
fault_response_input: str
```

- *Type:* str

---

##### `bandwidth_unmetered`<sup>Required</sup> <a name="bandwidth_unmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```python
bandwidth_unmetered: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_response`<sup>Required</sup> <a name="fault_response" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse"></a>

```python
fault_response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupWireProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---


### GoogleComputeWireGroupWiresEndpointsList <a name="GoogleComputeWireGroupWiresEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupWiresEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeWireGroupWiresEndpointsOutputReference <a name="GoogleComputeWireGroupWiresEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect">interconnect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag">vlan_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

---

##### `vlan_tag`<sup>Required</sup> <a name="vlan_tag" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag"></a>

```python
vlan_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupWiresEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a>

---


### GoogleComputeWireGroupWiresList <a name="GoogleComputeWireGroupWiresList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupWiresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeWireGroupWiresOutputReference <a name="GoogleComputeWireGroupWiresOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled">admin_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties">wire_properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled"></a>

```python
admin_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints"></a>

```python
endpoints: GoogleComputeWireGroupWiresEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `wire_properties`<sup>Required</sup> <a name="wire_properties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties"></a>

```python
wire_properties: GoogleComputeWireGroupWiresWirePropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupWires
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a>

---


### GoogleComputeWireGroupWiresWirePropertiesList <a name="GoogleComputeWireGroupWiresWirePropertiesList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeWireGroupWiresWirePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeWireGroupWiresWirePropertiesOutputReference <a name="GoogleComputeWireGroupWiresWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_wire_group

googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidth_unmetered</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse">fault_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_unmetered`<sup>Required</sup> <a name="bandwidth_unmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```python
bandwidth_unmetered: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_response`<sup>Required</sup> <a name="fault_response" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse"></a>

```python
fault_response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeWireGroupWiresWireProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a>

---



