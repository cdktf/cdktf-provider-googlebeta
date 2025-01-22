# `googleWorkbenchInstance` Submodule <a name="`googleWorkbenchInstance` Submodule" id="@cdktf/provider-google-beta.googleWorkbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkbenchInstance <a name="GoogleWorkbenchInstance" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstance(
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
  name: str,
  desired_state: str = None,
  disable_proxy_access: typing.Union[bool, IResolvable] = None,
  gce_setup: GoogleWorkbenchInstanceGceSetup = None,
  id: str = None,
  instance_id: str = None,
  instance_owners: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleWorkbenchInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#location GoogleWorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#desired_state GoogleWorkbenchInstance#desired_state}

---

##### `disable_proxy_access`<sup>Optional</sup> <a name="disable_proxy_access" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.disableProxyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disable_proxy_access GoogleWorkbenchInstance#disable_proxy_access}

---

##### `gce_setup`<sup>Optional</sup> <a name="gce_setup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.gceSetup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#gce_setup GoogleWorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#instance_id GoogleWorkbenchInstance#instance_id}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* typing.List[str]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.
If specified, sets the access mode to 'Single user'. For more details, see
https://cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#instance_owners GoogleWorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#labels GoogleWorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#timeouts GoogleWorkbenchInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup">put_gce_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess">reset_disable_proxy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup">reset_gce_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners">reset_instance_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gce_setup` <a name="put_gce_setup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup"></a>

```python
def put_gce_setup(
  accelerator_configs: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]] = None,
  boot_disk: GoogleWorkbenchInstanceGceSetupBootDisk = None,
  container_image: GoogleWorkbenchInstanceGceSetupContainerImage = None,
  data_disks: GoogleWorkbenchInstanceGceSetupDataDisks = None,
  disable_public_ip: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  network_interfaces: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]] = None,
  service_accounts: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]] = None,
  shielded_instance_config: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_image: GoogleWorkbenchInstanceGceSetupVmImage = None
) -> None
```

###### `accelerator_configs`<sup>Optional</sup> <a name="accelerator_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.acceleratorConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#accelerator_configs GoogleWorkbenchInstance#accelerator_configs}

---

###### `boot_disk`<sup>Optional</sup> <a name="boot_disk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.bootDisk"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#boot_disk GoogleWorkbenchInstance#boot_disk}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#container_image GoogleWorkbenchInstance#container_image}

---

###### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.dataDisks"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#data_disks GoogleWorkbenchInstance#data_disks}

---

###### `disable_public_ip`<sup>Optional</sup> <a name="disable_public_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.disablePublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disable_public_ip GoogleWorkbenchInstance#disable_public_ip}

---

###### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.enableIpForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_ip_forwarding GoogleWorkbenchInstance#enable_ip_forwarding}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.machineType"></a>

- *Type:* str

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#machine_type GoogleWorkbenchInstance#machine_type}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#metadata GoogleWorkbenchInstance#metadata}

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#network_interfaces GoogleWorkbenchInstance#network_interfaces}

---

###### `service_accounts`<sup>Optional</sup> <a name="service_accounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.serviceAccounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#service_accounts GoogleWorkbenchInstance#service_accounts}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#shielded_instance_config GoogleWorkbenchInstance#shielded_instance_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.tags"></a>

- *Type:* typing.List[str]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#tags GoogleWorkbenchInstance#tags}

---

###### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#vm_image GoogleWorkbenchInstance#vm_image}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}.

---

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_disable_proxy_access` <a name="reset_disable_proxy_access" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess"></a>

```python
def reset_disable_proxy_access() -> None
```

##### `reset_gce_setup` <a name="reset_gce_setup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup"></a>

```python
def reset_gce_setup() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_instance_owners` <a name="reset_instance_owners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners"></a>

```python
def reset_instance_owners() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleWorkbenchInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleWorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo">health_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState">health_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory">upgrade_history</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput">disable_proxy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput">gce_setup_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput">instance_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gce_setup`<sup>Required</sup> <a name="gce_setup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup"></a>

```python
gce_setup: GoogleWorkbenchInstanceGceSetupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a>

---

##### `health_info`<sup>Required</sup> <a name="health_info" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo"></a>

```python
health_info: GoogleWorkbenchInstanceHealthInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a>

---

##### `health_state`<sup>Required</sup> <a name="health_state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState"></a>

```python
health_state: str
```

- *Type:* str

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts"></a>

```python
timeouts: GoogleWorkbenchInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upgrade_history`<sup>Required</sup> <a name="upgrade_history" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory"></a>

```python
upgrade_history: GoogleWorkbenchInstanceUpgradeHistoryList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `disable_proxy_access_input`<sup>Optional</sup> <a name="disable_proxy_access_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput"></a>

```python
disable_proxy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gce_setup_input`<sup>Optional</sup> <a name="gce_setup_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput"></a>

```python
gce_setup_input: GoogleWorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_owners_input`<sup>Optional</sup> <a name="instance_owners_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput"></a>

```python
instance_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleWorkbenchInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `disable_proxy_access`<sup>Required</sup> <a name="disable_proxy_access" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess"></a>

```python
disable_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_owners`<sup>Required</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkbenchInstanceConfig <a name="GoogleWorkbenchInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  desired_state: str = None,
  disable_proxy_access: typing.Union[bool, IResolvable] = None,
  gce_setup: GoogleWorkbenchInstanceGceSetup = None,
  id: str = None,
  instance_id: str = None,
  instance_owners: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleWorkbenchInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#location GoogleWorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#desired_state GoogleWorkbenchInstance#desired_state}

---

##### `disable_proxy_access`<sup>Optional</sup> <a name="disable_proxy_access" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess"></a>

```python
disable_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disable_proxy_access GoogleWorkbenchInstance#disable_proxy_access}

---

##### `gce_setup`<sup>Optional</sup> <a name="gce_setup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup"></a>

```python
gce_setup: GoogleWorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#gce_setup GoogleWorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#instance_id GoogleWorkbenchInstance#instance_id}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.
If specified, sets the access mode to 'Single user'. For more details, see
https://cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#instance_owners GoogleWorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#labels GoogleWorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleWorkbenchInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#timeouts GoogleWorkbenchInstance#timeouts}

---

### GoogleWorkbenchInstanceGceSetup <a name="GoogleWorkbenchInstanceGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup(
  accelerator_configs: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]] = None,
  boot_disk: GoogleWorkbenchInstanceGceSetupBootDisk = None,
  container_image: GoogleWorkbenchInstanceGceSetupContainerImage = None,
  data_disks: GoogleWorkbenchInstanceGceSetupDataDisks = None,
  disable_public_ip: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  network_interfaces: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]] = None,
  service_accounts: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]] = None,
  shielded_instance_config: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_image: GoogleWorkbenchInstanceGceSetupVmImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs">accelerator_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp">disable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType">machine_type</a></code> | <code>str</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts">service_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags">tags</a></code> | <code>typing.List[str]</code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `accelerator_configs`<sup>Optional</sup> <a name="accelerator_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```python
accelerator_configs: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#accelerator_configs GoogleWorkbenchInstance#accelerator_configs}

---

##### `boot_disk`<sup>Optional</sup> <a name="boot_disk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk"></a>

```python
boot_disk: GoogleWorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#boot_disk GoogleWorkbenchInstance#boot_disk}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage"></a>

```python
container_image: GoogleWorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#container_image GoogleWorkbenchInstance#container_image}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks"></a>

```python
data_disks: GoogleWorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#data_disks GoogleWorkbenchInstance#data_disks}

---

##### `disable_public_ip`<sup>Optional</sup> <a name="disable_public_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```python
disable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disable_public_ip GoogleWorkbenchInstance#disable_public_ip}

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_ip_forwarding GoogleWorkbenchInstance#enable_ip_forwarding}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#machine_type GoogleWorkbenchInstance#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#metadata GoogleWorkbenchInstance#metadata}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#network_interfaces GoogleWorkbenchInstance#network_interfaces}

---

##### `service_accounts`<sup>Optional</sup> <a name="service_accounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```python
service_accounts: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#service_accounts GoogleWorkbenchInstance#service_accounts}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#shielded_instance_config GoogleWorkbenchInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#tags GoogleWorkbenchInstance#tags}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage"></a>

```python
vm_image: GoogleWorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#vm_image GoogleWorkbenchInstance#vm_image}

---

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigs <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs(
  core_count: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">core_count</a></code> | <code>str</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type">type</a></code> | <code>str</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```python
core_count: str
```

- *Type:* str

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#core_count GoogleWorkbenchInstance#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#type GoogleWorkbenchInstance#type}

---

### GoogleWorkbenchInstanceGceSetupBootDisk <a name="GoogleWorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType">disk_type</a></code> | <code>str</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey">kms_key</a></code> | <code>str</code> | 'Optional. |

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupContainerImage <a name="GoogleWorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#repository GoogleWorkbenchInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#tag GoogleWorkbenchInstance#tag}

---

### GoogleWorkbenchInstanceGceSetupDataDisks <a name="GoogleWorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType">disk_type</a></code> | <code>str</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey">kms_key</a></code> | <code>str</code> | 'Optional. |

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfaces <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces(
  access_configs: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]] = None,
  network: str = None,
  nic_type: str = None,
  subnet: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs">access_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network">network</a></code> | <code>str</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">nic_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">subnet</a></code> | <code>str</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs"></a>

```python
access_configs: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#access_configs GoogleWorkbenchInstance#access_configs}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#network GoogleWorkbenchInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#nic_type GoogleWorkbenchInstance#nic_type}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#subnet GoogleWorkbenchInstance#subnet}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs(
  external_ip: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp">external_ip</a></code> | <code>str</code> | An external IP address associated with this instance. |

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

An external IP address associated with this instance.

Specify an unused
static external IP address available to the project or leave this field
undefined to use an IP from a shared ephemeral IP address pool. If you
specify a static external IP address, it must live in the same region as
the zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#external_ip GoogleWorkbenchInstance#external_ip}

---

### GoogleWorkbenchInstanceGceSetupServiceAccounts <a name="GoogleWorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts(
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email">email</a></code> | <code>str</code> | Optional. Email address of the service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```python
email: str
```

- *Type:* str

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#email GoogleWorkbenchInstance#email}

---

### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_integrity_monitoring GoogleWorkbenchInstance#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_secure_boot GoogleWorkbenchInstance#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_vtpm GoogleWorkbenchInstance#enable_vtpm}

---

### GoogleWorkbenchInstanceGceSetupVmImage <a name="GoogleWorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage(
  family: str = None,
  name: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family">family</a></code> | <code>str</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name">name</a></code> | <code>str</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family"></a>

```python
family: str
```

- *Type:* str

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#family GoogleWorkbenchInstance#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name"></a>

```python
name: str
```

- *Type:* str

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}

---

### GoogleWorkbenchInstanceHealthInfo <a name="GoogleWorkbenchInstanceHealthInfo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo()
```


### GoogleWorkbenchInstanceTimeouts <a name="GoogleWorkbenchInstanceTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}.

---

### GoogleWorkbenchInstanceUpgradeHistory <a name="GoogleWorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---


### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">core_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">core_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```python
core_count_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```python
core_count: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]

---


### GoogleWorkbenchInstanceGceSetupBootDiskOutputReference <a name="GoogleWorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---


### GoogleWorkbenchInstanceGceSetupContainerImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---


### GoogleWorkbenchInstanceGceSetupDataDisksOutputReference <a name="GoogleWorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput">external_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ip_input`<sup>Optional</sup> <a name="external_ip_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput"></a>

```python
external_ip_input: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">reset_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```python
def reset_subnet() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs"></a>

```python
access_configs: GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>]]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleWorkbenchInstanceGceSetupNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]

---


### GoogleWorkbenchInstanceGceSetupOutputReference <a name="GoogleWorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">put_accelerator_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk">put_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks">put_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts">put_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage">put_vm_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">reset_accelerator_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk">reset_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks">reset_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">reset_disable_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">reset_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage">reset_vm_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_configs` <a name="put_accelerator_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```python
def put_accelerator_configs(
  value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---

##### `put_boot_disk` <a name="put_boot_disk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```python
def put_boot_disk(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
) -> None
```

###### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskEncryption"></a>

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskSizeGb"></a>

- *Type:* str

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskType"></a>

- *Type:* str

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.kmsKey"></a>

- *Type:* str

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```python
def put_container_image(
  repository: str,
  tag: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.repository"></a>

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#repository GoogleWorkbenchInstance#repository}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.tag"></a>

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#tag GoogleWorkbenchInstance#tag}

---

##### `put_data_disks` <a name="put_data_disks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```python
def put_data_disks(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
) -> None
```

###### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskEncryption"></a>

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskSizeGb"></a>

- *Type:* str

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskType"></a>

- *Type:* str

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.kmsKey"></a>

- *Type:* str

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---

##### `put_service_accounts` <a name="put_service_accounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```python
def put_service_accounts(
  value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_integrity_monitoring GoogleWorkbenchInstance#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_secure_boot GoogleWorkbenchInstance#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#enable_vtpm GoogleWorkbenchInstance#enable_vtpm}

---

##### `put_vm_image` <a name="put_vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```python
def put_vm_image(
  family: str = None,
  name: str = None,
  project: str = None
) -> None
```

###### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.family"></a>

- *Type:* str

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#family GoogleWorkbenchInstance#family}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.name"></a>

- *Type:* str

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}

---

##### `reset_accelerator_configs` <a name="reset_accelerator_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```python
def reset_accelerator_configs() -> None
```

##### `reset_boot_disk` <a name="reset_boot_disk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```python
def reset_boot_disk() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_data_disks` <a name="reset_data_disks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```python
def reset_data_disks() -> None
```

##### `reset_disable_public_ip` <a name="reset_disable_public_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```python
def reset_disable_public_ip() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_service_accounts` <a name="reset_service_accounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```python
def reset_service_accounts() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vm_image` <a name="reset_vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```python
def reset_vm_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">accelerator_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">service_accounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">accelerator_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">boot_disk_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">data_disks_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">disable_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">service_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">disable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_configs`<sup>Required</sup> <a name="accelerator_configs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```python
accelerator_configs: GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `boot_disk`<sup>Required</sup> <a name="boot_disk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```python
boot_disk: GoogleWorkbenchInstanceGceSetupBootDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```python
container_image: GoogleWorkbenchInstanceGceSetupContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `data_disks`<sup>Required</sup> <a name="data_disks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```python
data_disks: GoogleWorkbenchInstanceGceSetupDataDisksOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: GoogleWorkbenchInstanceGceSetupNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `service_accounts`<sup>Required</sup> <a name="service_accounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```python
service_accounts: GoogleWorkbenchInstanceGceSetupServiceAccountsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```python
vm_image: GoogleWorkbenchInstanceGceSetupVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `accelerator_configs_input`<sup>Optional</sup> <a name="accelerator_configs_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```python
accelerator_configs_input: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---

##### `boot_disk_input`<sup>Optional</sup> <a name="boot_disk_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```python
boot_disk_input: GoogleWorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```python
container_image_input: GoogleWorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---

##### `data_disks_input`<sup>Optional</sup> <a name="data_disks_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```python
data_disks_input: GoogleWorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---

##### `disable_public_ip_input`<sup>Optional</sup> <a name="disable_public_ip_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```python
disable_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---

##### `service_accounts_input`<sup>Optional</sup> <a name="service_accounts_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```python
service_accounts_input: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```python
vm_image_input: GoogleWorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---

##### `disable_public_ip`<sup>Required</sup> <a name="disable_public_ip" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```python
disable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsList <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleWorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]]

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleWorkbenchInstanceGceSetupServiceAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>]

---


### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### GoogleWorkbenchInstanceGceSetupVmImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_family` <a name="reset_family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---


### GoogleWorkbenchInstanceHealthInfoList <a name="GoogleWorkbenchInstanceHealthInfoList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleWorkbenchInstanceHealthInfoOutputReference <a name="GoogleWorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceHealthInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a>

---


### GoogleWorkbenchInstanceTimeoutsOutputReference <a name="GoogleWorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleWorkbenchInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>]

---


### GoogleWorkbenchInstanceUpgradeHistoryList <a name="GoogleWorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkbenchInstanceUpgradeHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleWorkbenchInstanceUpgradeHistoryOutputReference <a name="GoogleWorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workbench_instance

googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">vm_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```python
vm_image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkbenchInstanceUpgradeHistory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a>

---



