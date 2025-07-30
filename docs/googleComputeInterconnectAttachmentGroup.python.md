# `googleComputeInterconnectAttachmentGroup` Submodule <a name="`googleComputeInterconnectAttachmentGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectAttachmentGroup <a name="GoogleComputeInterconnectAttachmentGroup" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group google_compute_interconnect_attachment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intent: GoogleComputeInterconnectAttachmentGroupIntent,
  name: str,
  attachments: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]] = None,
  description: str = None,
  id: str = None,
  interconnect_group: str = None,
  project: str = None,
  timeouts: GoogleComputeInterconnectAttachmentGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.attachments">attachments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]</code> | attachments block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.interconnectGroup">interconnect_group</a></code> | <code>str</code> | The URL of an InterconnectGroup that groups these Attachments' Interconnects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.intent"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#intent GoogleComputeInterconnectAttachmentGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.attachments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]

attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#attachments GoogleComputeInterconnectAttachmentGroup#attachments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#description GoogleComputeInterconnectAttachmentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect_group`<sup>Optional</sup> <a name="interconnect_group" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.interconnectGroup"></a>

- *Type:* str

The URL of an InterconnectGroup that groups these Attachments' Interconnects.

Customers do not need to set this unless directed by
Google Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#interconnect_group GoogleComputeInterconnectAttachmentGroup#interconnect_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#timeouts GoogleComputeInterconnectAttachmentGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments">put_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent">put_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetAttachments">reset_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetInterconnectGroup">reset_interconnect_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attachments` <a name="put_attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments"></a>

```python
def put_attachments(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]

---

##### `put_intent` <a name="put_intent" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent"></a>

```python
def put_intent(
  availability_sla: str = None
) -> None
```

###### `availability_sla`<sup>Optional</sup> <a name="availability_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent.parameter.availabilitySla"></a>

- *Type:* str

Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#availability_sla GoogleComputeInterconnectAttachmentGroup#availability_sla}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#create GoogleComputeInterconnectAttachmentGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#delete GoogleComputeInterconnectAttachmentGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#update GoogleComputeInterconnectAttachmentGroup#update}.

---

##### `reset_attachments` <a name="reset_attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetAttachments"></a>

```python
def reset_attachments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect_group` <a name="reset_interconnect_group" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetInterconnectGroup"></a>

```python
def reset_interconnect_group() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInterconnectAttachmentGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInterconnectAttachmentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectAttachmentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachments">attachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList">GoogleComputeInterconnectAttachmentGroupAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.configured">configured</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList">GoogleComputeInterconnectAttachmentGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference">GoogleComputeInterconnectAttachmentGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.logicalStructure">logical_structure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList">GoogleComputeInterconnectAttachmentGroupLogicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference">GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachmentsInput">attachments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intentInput">intent_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroupInput">interconnect_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroup">interconnect_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachments"></a>

```python
attachments: GoogleComputeInterconnectAttachmentGroupAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList">GoogleComputeInterconnectAttachmentGroupAttachmentsList</a>

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.configured"></a>

```python
configured: GoogleComputeInterconnectAttachmentGroupConfiguredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList">GoogleComputeInterconnectAttachmentGroupConfiguredList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intent"></a>

```python
intent: GoogleComputeInterconnectAttachmentGroupIntentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference">GoogleComputeInterconnectAttachmentGroupIntentOutputReference</a>

---

##### `logical_structure`<sup>Required</sup> <a name="logical_structure" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.logicalStructure"></a>

```python
logical_structure: GoogleComputeInterconnectAttachmentGroupLogicalStructureList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList">GoogleComputeInterconnectAttachmentGroupLogicalStructureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference">GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference</a>

---

##### `attachments_input`<sup>Optional</sup> <a name="attachments_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachmentsInput"></a>

```python
attachments_input: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `intent_input`<sup>Optional</sup> <a name="intent_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intentInput"></a>

```python
intent_input: GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

---

##### `interconnect_group_input`<sup>Optional</sup> <a name="interconnect_group_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroupInput"></a>

```python
interconnect_group_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInterconnectAttachmentGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interconnect_group`<sup>Required</sup> <a name="interconnect_group" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroup"></a>

```python
interconnect_group: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectAttachmentGroupAttachments <a name="GoogleComputeInterconnectAttachmentGroupAttachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments(
  name: str,
  attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.attachment">attachment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#attachment GoogleComputeInterconnectAttachmentGroup#attachment}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.attachment"></a>

```python
attachment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#attachment GoogleComputeInterconnectAttachmentGroup#attachment}.

---

### GoogleComputeInterconnectAttachmentGroupConfig <a name="GoogleComputeInterconnectAttachmentGroupConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intent: GoogleComputeInterconnectAttachmentGroupIntent,
  name: str,
  attachments: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]] = None,
  description: str = None,
  id: str = None,
  interconnect_group: str = None,
  project: str = None,
  timeouts: GoogleComputeInterconnectAttachmentGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.attachments">attachments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]</code> | attachments block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.interconnectGroup">interconnect_group</a></code> | <code>str</code> | The URL of an InterconnectGroup that groups these Attachments' Interconnects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.intent"></a>

```python
intent: GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#intent GoogleComputeInterconnectAttachmentGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.attachments"></a>

```python
attachments: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]

attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#attachments GoogleComputeInterconnectAttachmentGroup#attachments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#description GoogleComputeInterconnectAttachmentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect_group`<sup>Optional</sup> <a name="interconnect_group" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.interconnectGroup"></a>

```python
interconnect_group: str
```

- *Type:* str

The URL of an InterconnectGroup that groups these Attachments' Interconnects.

Customers do not need to set this unless directed by
Google Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#interconnect_group GoogleComputeInterconnectAttachmentGroup#interconnect_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectAttachmentGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#timeouts GoogleComputeInterconnectAttachmentGroup#timeouts}

---

### GoogleComputeInterconnectAttachmentGroupConfigured <a name="GoogleComputeInterconnectAttachmentGroupConfigured" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured()
```


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla()
```


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers()
```


### GoogleComputeInterconnectAttachmentGroupIntent <a name="GoogleComputeInterconnectAttachmentGroupIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent(
  availability_sla: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.property.availabilitySla">availability_sla</a></code> | <code>str</code> | Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]. |

---

##### `availability_sla`<sup>Optional</sup> <a name="availability_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.property.availabilitySla"></a>

```python
availability_sla: str
```

- *Type:* str

Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#availability_sla GoogleComputeInterconnectAttachmentGroup#availability_sla}

---

### GoogleComputeInterconnectAttachmentGroupLogicalStructure <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure()
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions()
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros()
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities()
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones()
```


### GoogleComputeInterconnectAttachmentGroupTimeouts <a name="GoogleComputeInterconnectAttachmentGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#create GoogleComputeInterconnectAttachmentGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#delete GoogleComputeInterconnectAttachmentGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#update GoogleComputeInterconnectAttachmentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#create GoogleComputeInterconnectAttachmentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#delete GoogleComputeInterconnectAttachmentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_interconnect_attachment_group#update GoogleComputeInterconnectAttachmentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectAttachmentGroupAttachmentsList <a name="GoogleComputeInterconnectAttachmentGroupAttachmentsList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectAttachmentGroupAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]]

---


### GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment">reset_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attachment` <a name="reset_attachment" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment"></a>

```python
def reset_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput">attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment">attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_input`<sup>Optional</sup> <a name="attachment_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput"></a>

```python
attachment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment"></a>

```python
attachment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInterconnectAttachmentGroupAttachments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments">GoogleComputeInterconnectAttachmentGroupAttachments</a>]

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments">attachments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType">blocker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink">documentation_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation">explanation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros">metros</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments"></a>

```python
attachments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocker_type`<sup>Required</sup> <a name="blocker_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType"></a>

```python
blocker_type: str
```

- *Type:* str

---

##### `documentation_link`<sup>Required</sup> <a name="documentation_link" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink"></a>

```python
documentation_link: str
```

- *Type:* str

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation"></a>

```python
explanation: str
```

- *Type:* str

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros"></a>

```python
metros: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a>

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla">effective_sla</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers">intended_sla_blockers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_sla`<sup>Required</sup> <a name="effective_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla"></a>

```python
effective_sla: str
```

- *Type:* str

---

##### `intended_sla_blockers`<sup>Required</sup> <a name="intended_sla_blockers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers"></a>

```python
intended_sla_blockers: GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a>

---


### GoogleComputeInterconnectAttachmentGroupConfiguredList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla">availability_sla</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured">GoogleComputeInterconnectAttachmentGroupConfigured</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_sla`<sup>Required</sup> <a name="availability_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla"></a>

```python
availability_sla: GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupConfigured
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured">GoogleComputeInterconnectAttachmentGroupConfigured</a>

---


### GoogleComputeInterconnectAttachmentGroupIntentOutputReference <a name="GoogleComputeInterconnectAttachmentGroupIntentOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla">reset_availability_sla</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_sla` <a name="reset_availability_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla"></a>

```python
def reset_availability_sla() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput">availability_sla_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla">availability_sla</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_sla_input`<sup>Optional</sup> <a name="availability_sla_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput"></a>

```python
availability_sla_input: str
```

- *Type:* str

---

##### `availability_sla`<sup>Required</sup> <a name="availability_sla" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla"></a>

```python
availability_sla: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions">regions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure">GoogleComputeInterconnectAttachmentGroupLogicalStructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions"></a>

```python
regions: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupLogicalStructure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure">GoogleComputeInterconnectAttachmentGroupLogicalStructure</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility">facility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones">zones</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facility`<sup>Required</sup> <a name="facility" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility"></a>

```python
facility: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones"></a>

```python
zones: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment">attachment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment"></a>

```python
attachment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities">facilities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro">metro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities"></a>

```python
facilities: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a>

---

##### `metro`<sup>Required</sup> <a name="metro" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro"></a>

```python
metro: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros">metros</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros"></a>

```python
metros: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions</a>

---


### GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment_group

googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInterconnectAttachmentGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>]

---



