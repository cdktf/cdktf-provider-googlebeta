# `googleNetworkSecurityMirroringEndpointGroup` Submodule <a name="`googleNetworkSecurityMirroringEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpointGroup <a name="GoogleNetworkSecurityMirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group google_network_security_mirroring_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mirroring_deployment_group: str,
  mirroring_endpoint_group_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/MirroringEndpointGroup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#location GoogleNetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup"></a>

- *Type:* str

Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_deployment_group GoogleNetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId"></a>

- *Type:* str

Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_endpoint_group_id GoogleNetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#labels GoogleNetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#timeouts GoogleNetworkSecurityMirroringEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityMirroringEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput">mirroring_deployment_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput">mirroring_endpoint_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mirroring_deployment_group_input`<sup>Optional</sup> <a name="mirroring_deployment_group_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput"></a>

```python
mirroring_deployment_group_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_id_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput"></a>

```python
mirroring_endpoint_group_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecurityMirroringEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId"></a>

```python
mirroring_endpoint_group_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupConfig <a name="GoogleNetworkSecurityMirroringEndpointGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mirroring_deployment_group: str,
  mirroring_endpoint_group_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId">mirroring_endpoint_group_id</a></code> | <code>str</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/MirroringEndpointGroup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#location GoogleNetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_deployment_group GoogleNetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroring_endpoint_group_id`<sup>Required</sup> <a name="mirroring_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId"></a>

```python
mirroring_endpoint_group_id: str
```

- *Type:* str

Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_endpoint_group_id GoogleNetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#labels GoogleNetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#timeouts GoogleNetworkSecurityMirroringEndpointGroup#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointGroupTimeouts <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_mirroring_endpoint_group

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityMirroringEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>]

---



